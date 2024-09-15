package com.admin.admin.owner.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.admin.admin.owner.dto.OwnerDTO;
import com.admin.admin.owner.model.Owner;
import com.admin.admin.owner.repo.OwnerRepo;
import org.modelmapper.TypeToken;

@Service
public class OwnerService {

    @Autowired
    private OwnerRepo ownerRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<OwnerDTO> getAllOwners() {
        List<Owner> owners = ownerRepo.findAll();
        return modelMapper.map(owners, new TypeToken<List<OwnerDTO>>() {}.getType());
    }
}
