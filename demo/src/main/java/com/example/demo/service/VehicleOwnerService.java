package com.example.demo.service;

import com.example.demo.dto.VehicleOwnerDTO;
import com.example.demo.model.VehicleOwner;
import com.example.demo.repo.VehicleOwnerRepo;
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
    private ModelMapper modelMapper;
    public List<VehicleOwnerDTO> getAllVehicleOwners() {
        List<VehicleOwner>vehicleOwnerList = vehicleOwnerRepo.findAll();
        return modelMapper.map(vehicleOwnerList, new TypeToken<List<VehicleOwnerDTO>>(){}.getType());
    }
}
