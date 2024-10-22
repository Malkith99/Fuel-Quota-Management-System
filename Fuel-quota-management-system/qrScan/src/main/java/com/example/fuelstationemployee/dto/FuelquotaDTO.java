package com.example.fuelstationemployee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FuelquotaDTO {
    private String id;
    private int usedQuota;
    private String stationId;
    private String timeStamp;
}
