package com.example.demo.controller;

import com.example.demo.dto.VehicleOwnerDTO;
import com.example.demo.service.VehicleOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="api/v1/")
public class VehicleOwnerController {
    @Autowired
    private VehicleOwnerService vehicleOwnerService;
    @GetMapping("/vehicleOwners")
    public List<VehicleOwnerDTO> getAllVehicleOwners(){
        return vehicleOwnerService.getAllVehicleOwners();
    }
    @PostMapping("/vehicleOwner")
    public String createVehicleOwner(@RequestBody VehicleOwnerDTO vehicleOwnerDTO){
        // Print the request body to the console
        System.out.println("Received Vehicle Owner Request: " + vehicleOwnerDTO.toString());

        return vehicleOwnerService.createVehicleOwner(vehicleOwnerDTO);
    }
    @GetMapping("/vehicleOwner/{vehicleOwnerId}")
    public VehicleOwnerDTO getVehicleOwnerById(@PathVariable String vehicleOwnerId) {
        return vehicleOwnerService.getVehicleOwnerById(vehicleOwnerId);
    }
    @PutMapping("/vehicleOwner")
    public VehicleOwnerDTO updateVehicleOwner(@RequestBody VehicleOwnerDTO vehicleOwnerDTO) {
        return vehicleOwnerService.updateVehicleOwner(vehicleOwnerDTO);
    }
    @DeleteMapping("/vehicleOwner/{vehicleOwnerId}")
    public String deleteVehicleOwner(@PathVariable Integer vehicleOwnerId) {
        return vehicleOwnerService.deleteVehicleOwner(vehicleOwnerId);
    }
}
