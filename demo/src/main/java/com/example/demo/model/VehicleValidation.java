package com.example.demo.model;


import jakarta.persistence.*;

@Entity
@Table(name = "vehicle_validation")
public class VehicleValidation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true, nullable = false)
    private String vehicleNumberPlate;

    @Column(nullable = false)
    private String ownerName;

    public String getOwnerName() {
       return ownerName;
    }

}
