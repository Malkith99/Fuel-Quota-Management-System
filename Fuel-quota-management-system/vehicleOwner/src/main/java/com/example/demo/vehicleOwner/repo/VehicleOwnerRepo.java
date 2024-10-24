package com.example.demo.vehicleOwner.repo;

import com.example.demo.vehicleOwner.model.VehicleOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleOwnerRepo extends JpaRepository<VehicleOwner,String> {        //<Entity , datatype of primary Key >
    @Query(value = "SELECT * FROM vehicleowner WHERE nic = ?1", nativeQuery = true)
    VehicleOwner getVehicleOwnerById(String vehicleOwnerId);

    VehicleOwner findByEmailAndPassword(String email, String password);
}
