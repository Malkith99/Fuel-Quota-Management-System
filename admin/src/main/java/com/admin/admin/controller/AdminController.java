package com.admin.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    // Owner CRUD operations
    @GetMapping("/owners")
    public List<OwnerDTO> getOwners() {
        return ownerService.getAllOwners();
    }
    
}
