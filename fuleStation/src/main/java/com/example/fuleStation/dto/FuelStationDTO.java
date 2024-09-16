package com.example.fuleStation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FuelStationDTO {
    private Long id;
    private String name;
    private String location;
    private double fuelAmount;
}
