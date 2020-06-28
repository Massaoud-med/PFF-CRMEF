package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Departement;

public interface departementService {
	
	Departement createDepartement(Departement departement);

	Departement updateDepartement(Departement departement);

	List<Departement> getAllDepartement();

	Departement getDepartementById(long idDepartement);

	void deleteDepartement(long idDepartement);
}
