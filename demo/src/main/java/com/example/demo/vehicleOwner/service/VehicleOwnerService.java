package com.example.demo.vehicleOwner.service;

import com.example.demo.vehicleOwner.dto.VehicleOwnerDTO;
import com.example.demo.vehicleOwner.model.VehicleOwner;
//import com.example.demo.model.VehicleValidation;
import com.example.demo.vehicleOwner.repo.VehicleOwnerRepo;
//import com.example.demo.repo.VehicleValidationRepo;
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

//    @Autowired
//    private VehicleValidationRepo vehicleValidationRepo;    // Inject the validation repo

    @Autowired
    private ModelMapper modelMapper;
    public List<VehicleOwnerDTO> getAllVehicleOwners() {
        List<VehicleOwner>vehicleOwnerList = vehicleOwnerRepo.findAll();
        return modelMapper.map(vehicleOwnerList, new TypeToken<List<VehicleOwnerDTO>>(){}.getType());
    }
    public String createVehicleOwner(VehicleOwnerDTO vehicleOwnerDTO){

        // Validate vehicle number plate
//        VehicleValidation vehicleValidation = vehicleValidationRepo.findByVehicleNumberPlate(vehicleOwnerDTO.getVehicleNumberPlate());
//        if (vehicleValidation == null || !vehicleValidation.getOwnerName().equals(vehicleOwnerDTO.getName())) {
//            throw new IllegalArgumentException("Invalid vehicle number plate or owner name");
//        }

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
        return "Product deleted";
    }

}
