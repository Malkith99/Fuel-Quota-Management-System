package com.example.demo.service;

import com.example.demo.dto.VehicleOwnerDTO;
import com.example.demo.model.VehicleOwner;
import com.example.demo.repo.VehicleOwnerRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@Transactional
public class VehicleOwnerService {
    @Autowired
    private VehicleOwnerRepo vehicleOwnerRepo;

    @Autowired
    private ModelMapper modelMapper;
    public List<VehicleOwnerDTO> getAllVehicleOwners() {
        List<VehicleOwner>vehicleOwnerList = vehicleOwnerRepo.findAll();
        return modelMapper.map(vehicleOwnerList, new TypeToken<List<VehicleOwnerDTO>>(){}.getType());
    }
    public String createVehicleOwner(VehicleOwnerDTO vehicleOwnerDTO){
        vehicleOwnerRepo.save(modelMapper.map(vehicleOwnerDTO, VehicleOwner.class));
        return "User Created";
    }
    public VehicleOwnerDTO getVehicleOwnerById(Integer vehicleOwnerId) {
        VehicleOwner vehicleOwner = vehicleOwnerRepo.getVehicleOwnerById(vehicleOwnerId);
        return modelMapper.map(vehicleOwner, VehicleOwnerDTO.class);
    }
    public VehicleOwnerDTO updateVehicleOwner(VehicleOwnerDTO vehicleOwnerDTO) {
        vehicleOwnerRepo.save(modelMapper.map(vehicleOwnerDTO, VehicleOwner.class));
        return vehicleOwnerDTO;
    }
    public String deleteVehicleOwner(Integer VehicleOwnerId) {
        vehicleOwnerRepo.deleteById(VehicleOwnerId);
        return "Product deleted";
    }

}
