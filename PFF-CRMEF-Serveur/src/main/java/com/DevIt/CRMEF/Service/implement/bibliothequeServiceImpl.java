package com.DevIt.CRMEF.Service.implement;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DevIt.CRMEF.Entity.Bibliotheque;
import com.DevIt.CRMEF.Repository.BibliothequeRepository;
import com.DevIt.CRMEF.Service.bibliothequeService;

@Service
@Transactional
public class bibliothequeServiceImpl  implements bibliothequeService{

	@Autowired
	private BibliothequeRepository bibliothequeRepository;
	
	@Override
	public Bibliotheque createBibliotheque(Bibliotheque bibliotheque) {
		return bibliothequeRepository.save(bibliotheque);
	}

	@Override
	public Bibliotheque updateBibliotheque(Bibliotheque bibliotheque) {
	

		Optional<Bibliotheque> bibliothequeDB =this.bibliothequeRepository.findById(bibliotheque.getIdBib());
		
		if(bibliothequeDB.isPresent()) {
			
			Bibliotheque bibliothequeUpdate=bibliothequeDB.get();
			bibliothequeUpdate.setIdBib(bibliotheque.getIdBib());
			bibliothequeUpdate.setDepartement(bibliotheque.getDepartement());
			bibliothequeUpdate.setMatiere(bibliotheque.getMatiere());
			bibliothequeUpdate.setTitre(bibliotheque.getTitre());
			bibliothequeUpdate.setType(bibliotheque.getType());
			bibliothequeRepository.save(bibliothequeUpdate);
			return bibliothequeUpdate;
		} else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec id : " + bibliotheque.getIdBib());
		}
	}

	@Override
	public List<Bibliotheque> getAllBibliotheque() {
	
		return bibliothequeRepository.findAll();
	}

	@Override
	public Bibliotheque getBibliothequeById(long idBib) {
	
		Optional<Bibliotheque> f=this.bibliothequeRepository.findById(idBib);
		
		if(f.isPresent()) {return f.get();}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec id : " + idBib);
		}

	}

	@Override
	public void deleteBibliotheque(long idBib) {
	
	Optional<Bibliotheque> f=this.bibliothequeRepository.findById(idBib);
		
		if(f.isPresent()) { this.bibliothequeRepository.delete(f.get());}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec id : " + idBib);
		}
		
	}




}
