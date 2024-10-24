package com.example.fuelstationemployee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.example.fuelstationemployee.dto.UserDTO; // vehicle user
import com.example.fuelstationemployee.dto.OwnerDTO; //Fuel station

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/fuelstation")
public class FuelquotaController {

    @Autowired
    private RestTemplate restTemplate;

    private final String USER_SERVICE_URL = "http://localhost:8082/api/v1/"; // URL for User microservice
    private final String OWNER_SERVICE_URL = "http://localhost:8081/api/fuel_station"; // URL for Owner microservice

    // CRUD for fuel station
    @GetMapping("/getfuelquotas")
    public List<OwnerDTO> getOwners() {
        return restTemplate.getForObject(OWNER_SERVICE_URL + "/getFuelStation", List.class);
    }

    @GetMapping("/getfuelquota/{fuelquotaId}")
    public OwnerDTO getOwnerById(@PathVariable int id) {
        return restTemplate.getForObject(OWNER_SERVICE_URL + "/getFuelStationById/" + id, OwnerDTO.class);
    }

    @PostMapping("/addfuelquota")
    public OwnerDTO addOwner(@RequestBody OwnerDTO ownerDTO) {
        return restTemplate.postForObject(OWNER_SERVICE_URL + "/saveFuelStation", ownerDTO, OwnerDTO.class);
    }

    @PutMapping("/updatefuelquota")
    public OwnerDTO updateOwner(@RequestBody OwnerDTO ownerDTO) {
        restTemplate.put(OWNER_SERVICE_URL + "/updateFuelStation", ownerDTO);
        return ownerDTO;
    }

    // CRUD for vehicle users
    @GetMapping("/users")
    public List<UserDTO> getUsers() {
        return restTemplate.getForObject(USER_SERVICE_URL + "/vehicleOwners", List.class);
    }

    @GetMapping("/user/{id}")
    public UserDTO getUserById(@PathVariable int id) {
        return restTemplate.getForObject(USER_SERVICE_URL + "/vehicleOwner/" + id, UserDTO.class);
    }

    @PostMapping("/user")
    public UserDTO addUser(@RequestBody UserDTO userDTO) {
        return restTemplate.postForObject(USER_SERVICE_URL + "/vehicleOwner", userDTO, UserDTO.class);
    }

    @PutMapping("/user")
    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
        restTemplate.put(USER_SERVICE_URL + "/vehicleOwner", userDTO);
        return userDTO;
    }
}
