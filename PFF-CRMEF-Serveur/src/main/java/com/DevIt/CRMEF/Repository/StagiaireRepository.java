package com.DevIt.CRMEF.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import com.DevIt.CRMEF.Entity.Stagiaire;


//@Repository
@RepositoryRestResource

public interface StagiaireRepository  extends JpaRepository<Stagiaire, Long>{
	
	/*@Query("select s from Stagiaire s where s.filier= :x")
	public List<Stagiaire> cherche(@Param("x") String code_filier);*/

	


}
