package com.DevIt.CRMEF.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DevIt.CRMEF.Entity.Vacance;

@Repository
public interface VacanceRepository extends JpaRepository<Vacance, Long>{
	
	

}
