package com.example.fuleStation.repo;

import com.example.fuleStation.entity.FuelStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FuelStationRepo extends JpaRepository<FuelStation, Long> {
    @Query(value = "SELECT * FROM fuel_station WHERE id = ?1", nativeQuery = true)
    FuelStation getStationByID(String stationID);
}
