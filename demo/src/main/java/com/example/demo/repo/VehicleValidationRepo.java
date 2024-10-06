package com.example.demo.repo;

import com.example.demo.model.VehicleValidation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleValidationRepo extends JpaRepository<VehicleValidation, Integer> {
    VehicleValidation findByVehicleNumberPlate(String vehicleNumberPlate);
}
