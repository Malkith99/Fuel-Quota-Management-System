package com.example.fuleStation.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class FuelStationDTO {
//    private Long id;
    private String name;
    private String location;
    private double fuelAmount;
}
