package com.example.demo.motorTrafficDep.repo;

import com.example.demo.motorTrafficDep.model.MotorTrafficRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MotorTrafficRepo extends JpaRepository<MotorTrafficRecord ,String> {
    boolean existsByOwnerIdAndVehicleNumber(String ownerId, String vehicleNumber);
}


