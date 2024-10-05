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
    @GetMapping("/getAllVehicleOwners")
    public List<VehicleOwnerDTO> getAllVehicleOwners(){
        return vehicleOwnerService.getAllVehicleOwners();
    }
    @PostMapping("/createVehicleOwner")
    public String createVehicleOwner(@RequestBody VehicleOwnerDTO vehicleOwnerDTO){
        return vehicleOwnerService.createVehicleOwner(vehicleOwnerDTO);
    }
    @GetMapping("/getVehicleOwner/{vehicleOwnerId}")
    public VehicleOwnerDTO getVehicleOwnerById(@PathVariable Integer vehicleOwnerId) {
        return vehicleOwnerService.getVehicleOwnerById(vehicleOwnerId);
    }
    @PutMapping("/updateVehicleOwner")
    public VehicleOwnerDTO updateVehicleOwner(@RequestBody VehicleOwnerDTO vehicleOwnerDTO) {
        return vehicleOwnerService.updateVehicleOwner(vehicleOwnerDTO);
    }
    @DeleteMapping("/deleteVehicleOwner/{vehicleOwnerId}")
    public String deleteVehicleOwner(@PathVariable Integer vehicleOwnerId) {
        return vehicleOwnerService.deleteVehicleOwner(vehicleOwnerId);
    }
}
