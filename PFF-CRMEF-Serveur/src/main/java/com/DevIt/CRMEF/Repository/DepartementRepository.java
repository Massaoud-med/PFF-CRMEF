package com.DevIt.CRMEF.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DevIt.CRMEF.Entity.Departement;

@Repository
public interface DepartementRepository  extends JpaRepository<Departement, Long>{

}
