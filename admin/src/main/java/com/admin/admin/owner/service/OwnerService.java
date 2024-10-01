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

    public OwnerDTO getOwnerById(int id) {
        Owner owner = ownerRepo.findById(id).orElse(null);
        return modelMapper.map(owner, OwnerDTO.class);
    }

    public OwnerDTO saveOwner(OwnerDTO ownerDTO) {
        Owner owner = ownerRepo.save(modelMapper.map(ownerDTO, Owner.class));
        return modelMapper.map(owner, OwnerDTO.class);
    }

    public OwnerDTO updateOwner(OwnerDTO ownerDTO) {
        Owner owner = ownerRepo.save(modelMapper.map(ownerDTO, Owner.class));
        return modelMapper.map(owner, OwnerDTO.class);
    }

    public String deleteOwner(int id) {
        ownerRepo.deleteById(id);
        return "Owner deleted";
    }
}
