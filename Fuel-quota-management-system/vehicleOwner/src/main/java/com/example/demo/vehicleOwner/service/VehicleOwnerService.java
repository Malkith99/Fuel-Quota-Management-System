package com.example.demo.vehicleOwner.service;

import com.example.demo.exception.VehicleOwnerAlreadyExistsException;
import com.example.demo.exception.VehicleValidationFailedException;
import com.example.demo.motorTrafficDep.service.MotorTrafficService;
import com.example.demo.vehicleOwner.dto.FuelManagementDTO;
import com.example.demo.vehicleOwner.dto.VehicleOwnerDTO;
import com.example.demo.vehicleOwner.model.VehicleOwner;
import com.example.demo.vehicleOwner.repo.VehicleOwnerRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@Transactional
public class VehicleOwnerService {
    @Autowired
    private VehicleOwnerRepo vehicleOwnerRepo;

    @Autowired
    private MotorTrafficService motorTrafficService;

    @Autowired
    private ModelMapper modelMapper;
    public List<VehicleOwnerDTO> getAllVehicleOwners() {
        List<VehicleOwner>vehicleOwnerList = vehicleOwnerRepo.findAll();
        return modelMapper.map(vehicleOwnerList, new TypeToken<List<VehicleOwnerDTO>>(){}.getType());
    }
    public String createVehicleOwner(VehicleOwnerDTO vehicleOwnerDTO){
        String vehicleOwnerId=vehicleOwnerDTO.getId();
        String vehicleNumber = vehicleOwnerDTO.getVehicleNumber();

        boolean isVehicleOwnerExist=vehicleOwnerRepo.existsById(vehicleOwnerId);
        if (isVehicleOwnerExist){
            throw new VehicleOwnerAlreadyExistsException("Account already exists for this NIC.");
        }
        // Check if the vehicle exists in motorTrafficDB
        boolean isValidVehicle = motorTrafficService.validateVehicleOwner(vehicleOwnerId, vehicleNumber);
        if (!isValidVehicle) {
            throw new VehicleValidationFailedException("Validation failed: No matching record in motorTraffic database.");
        }
        // If validation passes, save the vehicle owner
        vehicleOwnerRepo.save(modelMapper.map(vehicleOwnerDTO, VehicleOwner.class));
       // FuelManagement fuelManagement= new FuelManagement(vehicleOwnerId,vehicleNumber,vehicleType,fuelQuota,fuelQuota);
        //fuelManagementRepo.save(fuelManagement);
        return "Vehicle owner registered successfully";

    }
    public VehicleOwnerDTO getVehicleOwnerById(String vehicleOwnerId) {
        VehicleOwner vehicleOwner = vehicleOwnerRepo.getVehicleOwnerById(vehicleOwnerId);
        return modelMapper.map(vehicleOwner, VehicleOwnerDTO.class);
    }
    public VehicleOwnerDTO updateVehicleOwner(VehicleOwnerDTO vehicleOwnerDTO) {
        vehicleOwnerRepo.save(modelMapper.map(vehicleOwnerDTO, VehicleOwner.class));
        return vehicleOwnerDTO;
    }
    public String deleteVehicleOwner(String VehicleOwnerId) {
        vehicleOwnerRepo.deleteById(VehicleOwnerId);
        return "Owner  deleted";
    }

    public VehicleOwnerDTO login(String email, String password) {
        VehicleOwner vehicleOwner=vehicleOwnerRepo.findByEmailAndPassword(email,password);
        if(vehicleOwner==null){
            throw new IllegalArgumentException("Invalid email or password");
        }
        return modelMapper.map(vehicleOwner, VehicleOwnerDTO.class);
    }

    public FuelManagementDTO getFuelManagementById(String vehicleOwnerId) {
        List<Object[]> resultList = vehicleOwnerRepo.getFuelManagamentdById(vehicleOwnerId);
        System.out.println(resultList.size());

        if (resultList != null && !resultList.isEmpty()) {
            Object[] result = resultList.get(0);
            System.out.println(Arrays.toString(result));

            if (result.length == 5) {
                String nic=result[0].toString();
                String vehicleNumber = result[1].toString();
                String vehicleType = result[2].toString();
                int allocateFuelQuota = Integer.parseInt(result[3].toString());
                int remainingFuelQuota = Integer.parseInt(result[4].toString());
                return new FuelManagementDTO(nic,vehicleNumber, vehicleType, allocateFuelQuota, remainingFuelQuota);
            }
        }
            return null;
        }
    public boolean updateFuelManagement(FuelManagementDTO updatedFuelManagement) {
        VehicleOwner existingOwner = vehicleOwnerRepo.findById(updatedFuelManagement.getNic()).orElse(null);
        if (existingOwner != null) {
            // Update only the fields that have changed
            if (updatedFuelManagement.getVehicleNumber() != null) {
                existingOwner.setVehicleNumber(updatedFuelManagement.getVehicleNumber());
            }
            if (updatedFuelManagement.getVehicleType() != null) {
                existingOwner.setVehicleType(updatedFuelManagement.getVehicleType());
            }
            if (updatedFuelManagement.getRemainingFuelQuota() != existingOwner.getRemainingFuelQuota()) {
                existingOwner.setRemainingFuelQuota(updatedFuelManagement.getRemainingFuelQuota());
            }
            vehicleOwnerRepo.save(existingOwner);
            return true;
        }
        return false;
    }
}
