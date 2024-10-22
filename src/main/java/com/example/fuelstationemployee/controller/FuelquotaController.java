package com.example.fuelstationemployee.controller;

import com.example.fuelstationemployee.dto.FuelquotaDTO;
import com.example.fuelstationemployee.service.FuelquotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/fuelstation")
public class FuelquotaController {

    @Autowired
    private FuelquotaService fuelquotaService;

    //just to see all data
    @GetMapping("/getfuelquotas")
    public List<FuelquotaDTO> getUsers(){
        return fuelquotaService.getAllFuelQuotas();
    }

    @GetMapping("/getfuelquota/{fuelquotaId}")
    public FuelquotaDTO getOrderById(@PathVariable String fuelquotaId) {
        return fuelquotaService.getAllFuelQuotaById(fuelquotaId);
    }

    //just to add some data
    @PostMapping("/addfuelquota")
    public FuelquotaDTO saveFuelQuota(@RequestBody FuelquotaDTO fuelquotaDTO){
        return fuelquotaService.saveFuelQuota(fuelquotaDTO);
    }

    @PutMapping("/updatefuelquota")
    public FuelquotaDTO updateFuelQuota(@RequestBody FuelquotaDTO fuelquotaDTO){
        return fuelquotaService.updateFuelQuota(fuelquotaDTO);
    }
}
