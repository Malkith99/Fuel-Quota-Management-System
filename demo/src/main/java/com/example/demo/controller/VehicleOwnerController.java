package com.example.demo.controller;

import com.example.demo.motorTrafficDep.dto.MotorTrafficRecordDTO;
import com.example.demo.motorTrafficDep.service.MotorTrafficService;
import com.example.demo.vehicleOwner.dto.VehicleOwnerDTO;
import com.example.demo.vehicleOwner.service.VehicleOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="api/v1/")
public class VehicleOwnerController {
    @Autowired
    private VehicleOwnerService vehicleOwnerService;
    @Autowired
    private MotorTrafficService motorTrafficService;

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
    @PostMapping("/motorTrafficRecord")
    public String createMotorTrafficRecord(@RequestBody MotorTrafficRecordDTO motorTrafficRecordDTO){
        // Print the request body to the console
        System.out.println("Received MotorTraffic Request: " + motorTrafficRecordDTO.toString());

        return motorTrafficService.createMotorTrafficRecord(motorTrafficRecordDTO);
    }
    @GetMapping("/vehicleOwner/{vehicleOwnerId}")
    public ResponseEntity<VehicleOwnerDTO> getVehicleOwnerById(@PathVariable String vehicleOwnerId) {
        VehicleOwnerDTO vehicleOwner =  vehicleOwnerService.getVehicleOwnerById(vehicleOwnerId);
        if (vehicleOwner != null) {
            return new ResponseEntity<>(vehicleOwner, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @PutMapping("/vehicleOwner")
    public VehicleOwnerDTO updateVehicleOwner(@RequestBody VehicleOwnerDTO vehicleOwnerDTO) {
        System.out.println("Received update Request: " + vehicleOwnerDTO.toString());
        return vehicleOwnerService.updateVehicleOwner(vehicleOwnerDTO);
    }
    @DeleteMapping("/vehicleOwner/{vehicleOwnerId}")
    public String deleteVehicleOwner(@PathVariable String vehicleOwnerId) {
        return vehicleOwnerService.deleteVehicleOwner(vehicleOwnerId);
    }
}
