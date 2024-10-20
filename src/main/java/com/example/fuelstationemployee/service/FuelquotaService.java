package com.example.fuelstationemployee.service;

import com.example.fuelstationemployee.dto.FuelquotaDTO;
import com.example.fuelstationemployee.model.Fuelquota;
import com.example.fuelstationemployee.repo.FuelquotaRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class FuelquotaService {

    @Autowired
    private FuelquotaRepo fuelquotaRepo;

    @Autowired
    private ModelMapper modelMapper;

    //just to see all data
    public List<FuelquotaDTO> getAllFuelQuotas(){
        List<Fuelquota>orderList= fuelquotaRepo.findAll();
        return modelMapper.map(orderList,new org.modelmapper.TypeToken<List<FuelquotaDTO>>(){}.getType());
    }

    public FuelquotaDTO getAllFuelQuotaById(String fuelquotaId){
        Fuelquota fuelquota = fuelquotaRepo.getQuotaById(fuelquotaId);
        return modelMapper.map(fuelquota, FuelquotaDTO.class);
    }

    //just to add some data
    public FuelquotaDTO saveFuelQuota(FuelquotaDTO orderDTO){
        fuelquotaRepo.save(modelMapper.map(orderDTO, Fuelquota.class));
        return orderDTO;
    }

    public FuelquotaDTO updateFuelQuota(FuelquotaDTO fuelquotaDTO){
        fuelquotaRepo.save(modelMapper.map(fuelquotaDTO,Fuelquota.class));
        return fuelquotaDTO;
    }
}
