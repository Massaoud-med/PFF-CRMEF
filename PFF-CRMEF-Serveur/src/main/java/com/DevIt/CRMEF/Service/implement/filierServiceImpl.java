package com.DevIt.CRMEF.Service.implement;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DevIt.CRMEF.Entity.Filiere;
import com.DevIt.CRMEF.Repository.FilierRepository;
import com.DevIt.CRMEF.Service.filierService;


@Service
@Transactional
public class filierServiceImpl  implements filierService{

	
	@Autowired
	private FilierRepository filierRepo;
	
	
	@Override
	public List<Filiere> getAllFilier() {
		
		return this.filierRepo.findAll();
	}

	@Override
	public Filiere getFilierById(long idF) {
		
	Optional<Filiere> fi=this.filierRepo.findById(idF);
		
		if(fi.isPresent()) {return fi.get();}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant : " + idF);
		}
	
	}

}
