package com.example.fuelstationemployee.repo;

import com.example.fuelstationemployee.model.Fuelquota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FuelquotaRepo extends JpaRepository<Fuelquota, Integer> {
    @Query(value = "SELECT * FROM fuelquota WHERE id = ?1", nativeQuery = true)
    Fuelquota getQuotaById(Integer fuelquotaId);
}
