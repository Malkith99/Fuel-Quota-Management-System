package com.example.demo.vehicleOwner.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleOwnerDTO {
    private String NIC;
    private String email;
    private String name;
    private String password;
    private String vehicleNumber;
    private String vehicleType;
    private int fuelQuota;


    public String getVehicleNumberPlate() {
        return vehicleNumber;
    }

    public String getName() {
        return name;
    }
}
