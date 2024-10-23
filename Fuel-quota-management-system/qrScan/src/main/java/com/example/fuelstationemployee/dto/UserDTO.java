package com.example.fuelstationemployee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String nic;
    private String email;
    private String name;
    private String vehicleNumber;
    private int fuelQuota;
}
