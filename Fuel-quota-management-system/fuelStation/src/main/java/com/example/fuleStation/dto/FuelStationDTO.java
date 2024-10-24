package com.example.fuleStation.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class FuelStationDTO {
    private int id;
    private String name;
    private String location;
    private int fuelAmount;
}
