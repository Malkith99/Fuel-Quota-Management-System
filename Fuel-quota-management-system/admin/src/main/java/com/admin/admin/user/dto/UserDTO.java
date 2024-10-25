package com.admin.admin.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String nic;
    private String vehicleNumber;
    private String vehicleType;
    private int allocatedFuelQuota;
    private int remainingFuelQuota;
}
