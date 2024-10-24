package com.example.demo.vehicleOwner.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class VehicleOwnerDTO {
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
    public String getVehicleType() {
        return vehicleType;
    }
    public int getFuelQuota() {
        return fuelQuota;
    }

}
