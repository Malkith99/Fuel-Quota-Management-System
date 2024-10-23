package com.admin.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

//import com.admin.admin.user.dto.UserDTO;
import com.admin.admin.owner.dto.OwnerDTO;

@RestController
@RequestMapping("api/v1/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private RestTemplate restTemplate;

    // Assuming the user microservice runs on port 8081 and owner microservice on port 8082
//    private final String USER_SERVICE_URL = "http://localhost:8082/api/v1/user"; // URL for User microservice
    private final String OWNER_SERVICE_URL = "http://localhost:8081/api/fuel_station"; // URL for Owner microservice

    // User CRUD operations
//    @GetMapping("/users")
//    public List<UserDTO> getUsers() {
//        return restTemplate.getForObject(USER_SERVICE_URL + "/users", List.class);
//    }
//
//    @GetMapping("/user/{id}")
//    public UserDTO getUserById(@PathVariable int id) {
//        return restTemplate.getForObject(USER_SERVICE_URL + "/user/" + id, UserDTO.class);
//    }
//
//    @PostMapping("/user")
//    public UserDTO addUser(@RequestBody UserDTO userDTO) {
//        return restTemplate.postForObject(USER_SERVICE_URL + "/user", userDTO, UserDTO.class);
//    }
//
//    @PutMapping("/user")
//    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
//        restTemplate.put(USER_SERVICE_URL + "/user", userDTO);
//        return userDTO;
//    }
//
//    @DeleteMapping("/user/{id}")
//    public String deleteUser(@PathVariable int id) {
//        restTemplate.delete(USER_SERVICE_URL + "/user/" + id);
//        return "User deleted successfully";
//    }

    // Owner CRUD operations
    @GetMapping("/owners")
    public List<OwnerDTO> getOwners() {
        return restTemplate.getForObject(OWNER_SERVICE_URL + "/getFuelStation", List.class);
    }

    @GetMapping("/owner/{id}")
    public OwnerDTO getOwnerById(@PathVariable int id) {
        return restTemplate.getForObject(OWNER_SERVICE_URL + "/getFuelStationById/" + id, OwnerDTO.class);
    }

    @PostMapping("/owner")
    public OwnerDTO addOwner(@RequestBody OwnerDTO ownerDTO) {
        return restTemplate.postForObject(OWNER_SERVICE_URL + "/saveFuelStation", ownerDTO, OwnerDTO.class);
    }

    @PutMapping("/owner")
    public OwnerDTO updateOwner(@RequestBody OwnerDTO ownerDTO) {
        restTemplate.put(OWNER_SERVICE_URL + "/updateFuelStation", ownerDTO);
        return ownerDTO;
    }

    @DeleteMapping("/owner/{id}")
    public String deleteOwner(@PathVariable int id) {
        restTemplate.delete(OWNER_SERVICE_URL + "/owner/" + id);
        return "Owner deleted successfully";
    }
}
