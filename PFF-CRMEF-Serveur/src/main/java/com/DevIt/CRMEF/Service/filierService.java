package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Filiere;



public interface filierService {
	
	List<Filiere> getAllFilier();

	Filiere getFilierById(long idF);

}
