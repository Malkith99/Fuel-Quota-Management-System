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

    public FuelStationDTO saveFuelStation(FuelStationDTO fuelStationDTO) {
        // Map the DTO to an entity
        FuelStation fuelStationEntity = modelMapper.map(fuelStationDTO, FuelStation.class);

        // Save the entity and retrieve the saved instance with generated ID
        FuelStation savedStation = fuelStationRepo.save(fuelStationEntity);

        // Map the saved entity back to DTO and return it
        return modelMapper.map(savedStation, FuelStationDTO.class);
    }

    public List<FuelStationDTO> getAllFuelStation(){
        List<FuelStation> stationList = fuelStationRepo.findAll();
        return modelMapper.map(stationList,new TypeToken<List<FuelStationDTO>>(){}.getType());
    }

    public FuelStationDTO updateFuelStation(FuelStationDTO fuelStationDTO){
        fuelStationRepo.save(modelMapper.map(fuelStationDTO, FuelStation.class));
        return fuelStationDTO;
    }

    public boolean fuelStationDelete(FuelStationDTO fuelStationDTO){
        fuelStationRepo.delete(modelMapper.map(fuelStationDTO, FuelStation.class));
        return true;
    }

    public FuelStationDTO getStationById(String stationID){
        FuelStation fuelStation =  fuelStationRepo.getStationByID(stationID);
        return modelMapper.map(fuelStation, FuelStationDTO.class);
    }

}
