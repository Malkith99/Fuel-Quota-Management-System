package com.example.demo.vehicleOwner.dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data

public class FuelManagementDTO {
     private String nic;

    private String vehicleNumber;
    private String vehicleType;
    private int allocatedFuelQuota;
    private int remainingFuelQuota;

    public FuelManagementDTO(){}
    public FuelManagementDTO( String nic,String vehicleNumber, String vehicleType, int allocatedFuelQuota,int remainingFuelQuota) {
        this.nic=nic;
        this.vehicleNumber = vehicleNumber;
        this.vehicleType = vehicleType;
        this.allocatedFuelQuota=allocatedFuelQuota;
        this.remainingFuelQuota=remainingFuelQuota;
    }

    public String getNic() {
        return nic;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public int getAllocatedFuelQuota() {
        return allocatedFuelQuota;
    }

    public int getRemainingFuelQuota() {
        return remainingFuelQuota;
    }
}
