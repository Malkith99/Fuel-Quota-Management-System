package com.example.demo.vehicleOwner.model;

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
    private String nic;
    private String email;
    private String name;
    private String password;
    private String vehicleNumber;
    private String vehicleType;
    private int fuelQuota;
    private String qrCode;

    public String getId(){return nic;}
    public String getVehicleNumber() {
        return vehicleNumber;
    }
}
