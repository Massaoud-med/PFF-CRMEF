package com.DevIt.CRMEF.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DevIt.CRMEF.Entity.Bibliotheque;

@Repository
public interface BibliothequeRepository  extends JpaRepository<Bibliotheque, Long>{

}
