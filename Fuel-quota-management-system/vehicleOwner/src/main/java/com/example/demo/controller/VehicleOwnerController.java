package com.example.demo.controller;

import com.example.demo.exception.VehicleOwnerAlreadyExistsException;
import com.example.demo.exception.VehicleValidationFailedException;
import com.example.demo.motorTrafficDep.dto.MotorTrafficRecordDTO;
import com.example.demo.motorTrafficDep.service.MotorTrafficService;
import com.example.demo.vehicleOwner.dto.FuelManagementDTO;
import com.example.demo.vehicleOwner.dto.VehicleOwnerDTO;
import com.example.demo.vehicleOwner.service.VehicleOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public ResponseEntity<String>  createVehicleOwner(@RequestBody VehicleOwnerDTO vehicleOwnerDTO){
        // Print the request body to the console
        System.out.println("Received Vehicle Owner Request: " + vehicleOwnerDTO.toString());
        try{
            String result= vehicleOwnerService.createVehicleOwner(vehicleOwnerDTO);
            return new ResponseEntity<>(result, HttpStatus.CREATED); // Return 201 Created if successful
        }catch(VehicleOwnerAlreadyExistsException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT); // Return 409 Conflict
        }catch(VehicleValidationFailedException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST); // Return 400 Bad Request
        }catch (Exception e) {
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR); // Return 500
        }
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

    @PostMapping("/motorTrafficRecord")
    public String createMotorTrafficRecord(@RequestBody MotorTrafficRecordDTO motorTrafficRecordDTO){
        // Print the request body to the console
        System.out.println("Received MotorTraffic Request: " + motorTrafficRecordDTO.toString());

        return motorTrafficService.createMotorTrafficRecord(motorTrafficRecordDTO);
    }

    @PostMapping ("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> loginData) {
        String email= loginData.get("email");
        String password= loginData.get("password");
        try {
            // Try to authenticate the user with the provided email and password
            VehicleOwnerDTO vehicleOwner =  vehicleOwnerService.login(email,password);
            return ResponseEntity.ok(vehicleOwner);  // Return the authenticated user if successful
        } catch (IllegalArgumentException e) {
            // Return an error response in case of invalid credentials
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
    @GetMapping("/qrcode/{vehicleOwnerId}")
    public ResponseEntity<FuelManagementDTO> getFuelManagementById(@PathVariable String vehicleOwnerId) {
        FuelManagementDTO fuelManagement =  vehicleOwnerService.getFuelManagementById(vehicleOwnerId);
        if (fuelManagement != null) {
            return new ResponseEntity<>(fuelManagement, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/qrcode")
    public ResponseEntity<String> updateFuelManagement(@RequestBody FuelManagementDTO updatedFuelManagement) {
        boolean isUpdated = vehicleOwnerService.updateFuelManagement(updatedFuelManagement);
        if (isUpdated) {
            return new ResponseEntity<>("Update successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Vehicle Owner not found", HttpStatus.NOT_FOUND);
        }
    }

}
