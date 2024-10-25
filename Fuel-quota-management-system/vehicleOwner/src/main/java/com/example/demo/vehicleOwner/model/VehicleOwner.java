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
    private int allocatedFuelQuota;
    private int remainingFuelQuota;
    private String qrCode;

    public String getId(){return nic;}
    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public int getRemainingFuelQuota() {
       return remainingFuelQuota;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber=vehicleNumber;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType=vehicleType;
    }
    public void setRemainingFuelQuota(int remainingFuelQuota){
        this.remainingFuelQuota=remainingFuelQuota;
    }


}
