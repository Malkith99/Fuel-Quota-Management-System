package com.example.demo.motorTrafficDep.service;

import com.example.demo.motorTrafficDep.dto.MotorTrafficRecordDTO;
import com.example.demo.motorTrafficDep.repo.MotorTrafficRepo;
import com.example.demo.motorTrafficDep.model.MotorTrafficRecord;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class MotorTrafficService {
    @Autowired
    private MotorTrafficRepo motorTrafficRepo;

    @Autowired
    private ModelMapper modelMapper;

    public boolean validateVehicleOwner(String vehicleOwnerId,String vehicleNumber){
        // Check if the record exists in motorTraffic database
        return motorTrafficRepo.existsByOwnerIdAndVehicleNumber(vehicleOwnerId, vehicleNumber);
    }

    public String createMotorTrafficRecord(MotorTrafficRecordDTO motorTrafficRecordDTO){

        // If validation passes, save the vehicle owner
        motorTrafficRepo.save(modelMapper.map(motorTrafficRecordDTO, MotorTrafficRecord.class));
        return "Motor Traffic Record Added";

    }
}
