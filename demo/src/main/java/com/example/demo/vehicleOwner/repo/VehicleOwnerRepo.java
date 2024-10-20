package com.example.demo.owner.repo;

import com.example.demo.owner.model.VehicleOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleOwnerRepo extends JpaRepository<VehicleOwner,String> {        //<Entity , datatype of primary Key >
    @Query(value = "SELECT * FROM vehicle_owner WHERE nic = ?1", nativeQuery = true)
    VehicleOwner getVehicleOwnerById(String vehicleOwnerId);
}
