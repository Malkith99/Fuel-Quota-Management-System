package com.example.demo.motorTrafficDep.model;

import jakarta.persistence.*;

@Entity
//@Table(name = "motor_traffic_records")
public class MotorTrafficRecord {

    @Id
    private String vehicleNumber; // Primary key

    private String ownerId;
    private String vehicleType;


    public MotorTrafficRecord() {}

    public MotorTrafficRecord(String vehicleNumber, String ownerId, String vehicleType) {
        this.vehicleNumber = vehicleNumber;
        this.ownerId = ownerId;
        this.vehicleType = vehicleType;
    }

    // Getters and Setters
    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    @Override
    public String toString() {
        return "MotorTrafficRecord{" +
                "vehicleNumber='" + vehicleNumber + '\'' +
                ", ownerId='" + ownerId + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                '}';
    }
}
