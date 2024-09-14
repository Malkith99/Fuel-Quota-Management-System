package com.example.fuleStation.service;

import com.example.fuleStation.dto.FuelStationDTO;
import com.example.fuleStation.entity.FuelStation;
import com.example.fuleStation.repo.FuelStationRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuelStationService {
    @Autowired
    private FuelStationRepo fuelStationRepo;

    @Autowired
    private ModelMapper modelMapper;

    public FuelStationDTO saveUser(FuelStationDTO fuelStationDTO){

        fuelStationRepo.save(modelMapper.map(fuelStationRepo, FuelStation.class));
        return fuelStationDTO;

    }

    public List<FuelStationDTO> getAllUsers(){
        List<FuelStation> userList = fuelStationRepo.findAll();
        return modelMapper.map(userList,new TypeToken<List<FuelStationDTO>>(){}.getType());
    }

    public FuelStationDTO updateUser(FuelStationDTO fuelStationDTO){
        fuelStationRepo.save(modelMapper.map(fuelStationDTO, FuelStation.class));
        return fuelStationDTO;
    }

    public boolean userDelete(FuelStationDTO fuelStationDTO){
        fuelStationRepo.delete(modelMapper.map(fuelStationDTO, FuelStation.class));
        return true;
    }

}
