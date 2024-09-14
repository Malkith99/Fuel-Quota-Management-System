package com.example.fuleStation.repo;

import com.example.fuleStation.entity.FuelStation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuelStationRepo extends JpaRepository<FuelStation, Long> {
}
