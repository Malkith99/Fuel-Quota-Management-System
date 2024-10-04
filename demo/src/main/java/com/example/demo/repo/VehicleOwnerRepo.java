package com.example.demo.repo;

import com.example.demo.model.VehicleOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleOwnerRepo extends JpaRepository<VehicleOwner,Integer> {
    @Query(value = "SELECT * FROM product WHERE vehicleOwner_id = ?1", nativeQuery = true)
    VehicleOwner getVehicleOwnerById(Integer vehicleOwnerId);
}
