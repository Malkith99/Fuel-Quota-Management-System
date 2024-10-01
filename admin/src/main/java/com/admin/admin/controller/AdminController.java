package com.admin.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestParam;
import com.admin.admin.user.service.UserService;
import com.admin.admin.owner.service.OwnerService;
import com.admin.admin.user.dto.UserDTO;
import com.admin.admin.owner.dto.OwnerDTO;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private OwnerService ownerService;

    // User CRUD operations
    @GetMapping("/users")
    public List<UserDTO> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public UserDTO getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping("/user")
    public UserDTO addUser(@RequestBody UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }

    @PutMapping("/user")
    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
        return userService.updateUser(userDTO);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable int id) {
        return userService.deleteUser(id);
    }

    // Owner CRUD operations
    @GetMapping("/owners")
    public List<OwnerDTO> getOwners() {
        return ownerService.getAllOwners();
    }

    @GetMapping("/owner/{id}")
    public OwnerDTO getOwnerById(@PathVariable int id) {
        return ownerService.getOwnerById(id);
    }

    @PostMapping("/owner")
    public OwnerDTO addOwner(@RequestBody OwnerDTO ownerDTO) {
        return ownerService.saveOwner(ownerDTO);
    }

    @PutMapping("/owner")
    public OwnerDTO updateOwner(@RequestBody OwnerDTO ownerDTO) {
        return ownerService.updateOwner(ownerDTO);
    }

    @DeleteMapping("/owner/{id}")
    public String deleteOwner(@PathVariable int id) {
        return ownerService.deleteOwner(id);
    }
    
}
