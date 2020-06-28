package com.DevIt.CRMEF.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DevIt.CRMEF.Entity.Filiere;


@Repository

public interface FilierRepository  extends JpaRepository<Filiere, Long>{

}
