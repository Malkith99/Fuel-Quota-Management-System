package com.example.fuelstationemployee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Fuelquota {
    @Id
    private int id;
    private int usedQuota;
    private String stationId;
    private String timeStamp;
    // private String type;
    //private int remainingAmount;
}
