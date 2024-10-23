package com.example.demo.vehicleOwner.service;

import com.example.demo.motorTrafficDep.repo.MotorTrafficRepo;
import com.example.demo.motorTrafficDep.service.MotorTrafficService;
import com.example.demo.vehicleOwner.dto.VehicleOwnerDTO;
import com.example.demo.vehicleOwner.model.VehicleOwner;

import com.example.demo.vehicleOwner.repo.VehicleOwnerRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

        // Check if the vehicle exists in motorTrafficDB
        boolean isValidVehicle = motorTrafficService.validateVehicleOwner(vehicleOwnerId, vehicleNumber);
        if (!isValidVehicle) {
            return "Validation failed: No matching record in motorTraffic database.";
        }

        // If validation passes, save the vehicle owner
        vehicleOwnerRepo.save(modelMapper.map(vehicleOwnerDTO, VehicleOwner.class));
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
}
