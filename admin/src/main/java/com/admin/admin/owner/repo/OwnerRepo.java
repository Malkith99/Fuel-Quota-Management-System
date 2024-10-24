package com.admin.admin.owner.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.admin.owner.model.Owner;

public interface OwnerRepo extends JpaRepository<Owner, Integer> {

}
