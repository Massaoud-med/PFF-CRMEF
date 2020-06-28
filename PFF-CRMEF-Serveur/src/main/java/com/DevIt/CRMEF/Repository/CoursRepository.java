package com.DevIt.CRMEF.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DevIt.CRMEF.Entity.Cours;
@Repository
public interface CoursRepository  extends JpaRepository<Cours, Long>{

}
