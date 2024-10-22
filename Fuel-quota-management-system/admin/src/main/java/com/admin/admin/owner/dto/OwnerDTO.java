package com.admin.admin.owner.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OwnerDTO {
    private int id;
    private String name;
    private String location;
    private Integer fuelAmount;
}