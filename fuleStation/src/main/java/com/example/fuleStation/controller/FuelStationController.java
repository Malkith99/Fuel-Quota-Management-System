package com.example.fuleStation.controller;

import com.example.fuleStation.dto.FuelStationDTO;
import com.example.fuleStation.service.FuelStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin

public class FuelStationController {
    @Autowired
    private FuelStationService fuelStationService;

    @GetMapping("/getFuelStation")
    public List<FuelStationDTO> getFuelStation(){
        return fuelStationService.getAllFuelStation();
    }

    @PostMapping("/saveFuelStation")
    public FuelStationDTO saveFuelStation(@RequestBody FuelStationDTO fuelStationDTO){
        return fuelStationService.saveFuelStation(fuelStationDTO);
    }

    @PutMapping("/updateFuelStation")
    public FuelStationDTO updateFuelStation(@RequestBody FuelStationDTO fuelStationDTO){
        return fuelStationService.updateFuelStation(fuelStationDTO);
    }

    @DeleteMapping("/deleteFuelStation")
    public boolean deleteFuelStation(@RequestBody FuelStationDTO fuelStationDTO){
        return fuelStationService.fuelStationDelete(fuelStationDTO);
    }

    @GetMapping("/getFuelStationById/{stationID}")
    public FuelStationDTO getFuelStationById(@PathVariable String stationID){
        return fuelStationService.getStationById(stationID);
    }

}
