package com.example.fuleStation.controller;

import com.example.fuleStation.dto.FuelStationDTO;
import com.example.fuleStation.service.FuelStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class FuelStationController {
    @Autowired
    private FuelStationService userService;

    @GetMapping("/getFuelStation")
    public List<FuelStationDTO> getFuelStation(){
        return userService.getAllFuelStation();
    }

    @PostMapping("/saveFuelStation")
    public FuelStationDTO saveFuelStation(@RequestBody FuelStationDTO fuelStationDTO){
        return userService.saveFuelStation(fuelStationDTO);
    }

    @PutMapping("/updateFuelStation")
    public FuelStationDTO updateFuelStation(@RequestBody FuelStationDTO fuelStationDTO){
        return userService.updateFuelStation(fuelStationDTO);
    }

    @DeleteMapping("/deleteFuelStation")
    public boolean deleteFuelStation(@RequestBody FuelStationDTO fuelStationDTO){
        return userService.fuelStationDelete(fuelStationDTO);
    }

}
