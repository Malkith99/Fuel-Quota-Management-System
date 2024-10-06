package com.example.demo.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleOwnerDTO {
    private int id;
    private String email;
    private String name;
    private String password;
    private String vehicleNumberPlate;
    private int fuelQuota;

    public String getVehicleNumberPlate() {
        return vehicleNumberPlate;
    }

    public String getName() {
        return name;
    }
}
