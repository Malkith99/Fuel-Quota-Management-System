package com.example.demo.owner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VehicleOwner {
    @Id
    private String NIC;
    private String email;
    private String name;
    private String password;
    private String vehicleNumber;
    private int fuelQuota;
}
