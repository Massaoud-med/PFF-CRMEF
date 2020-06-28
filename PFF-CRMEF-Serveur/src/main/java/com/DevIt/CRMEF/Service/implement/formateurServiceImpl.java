package com.DevIt.CRMEF.Service.implement;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DevIt.CRMEF.Entity.Formateur;
import com.DevIt.CRMEF.Repository.formateurRepository;
import com.DevIt.CRMEF.Service.formateurService;
@Service
@Transactional
public class formateurServiceImpl implements formateurService{
	
	@Autowired
	private formateurRepository repositoryformateur;

	@Override
	public Formateur createFormateur(Formateur formateur) {
		return repositoryformateur.save(formateur);
	}

	@Override
	public Formateur updateFormateur(Formateur formateur) {
		
		Optional<Formateur> formateurDB =this.repositoryformateur.findById(formateur.getIdformateur());
		
		if(formateurDB.isPresent()) {
			
			Formateur formateurUpdate=formateurDB.get();
			formateurUpdate.setIdformateur(formateur.getIdformateur());
			formateurUpdate.setAdresse(formateur.getAdresse());
			formateurUpdate.setCin(formateur.getCin());
			formateurUpdate.setDateNais(formateur.getDateNais());
			formateurUpdate.setEmail(formateur.getEmail());
			formateurUpdate.setLieuNais(formateur.getLieuNais());
			formateurUpdate.setNom(formateur.getNom());
			formateurUpdate.setNumF(formateur.getNumF());
			formateurUpdate.setTele(formateur.getTele());
			formateurUpdate.setSexe(formateur.getSexe());
			formateurUpdate.setSitutionF(formateur.getSitutionF());
			
			
			formateurUpdate.setBacObention(formateur.getBacObention());
			formateurUpdate.setAnneeObtentionBac(formateur.getAnneeObtentionBac());
			formateurUpdate.setDernierDiplome(formateur.getDernierDiplome());
			formateurUpdate.setAnneeObtentionDiplome(formateur.getAnneeObtentionDiplome());
			formateurUpdate.setSpecialiteDiplom(formateur.getSpecialiteDiplom());
			formateurUpdate.setMentionDiplome(formateur.getMentionDiplome());
			formateurUpdate.setFacObtentionDiplome(formateur.getFacObtentionDiplome());
			
			formateurUpdate.setAnneeExp(formateur.getAnneeExp());
			formateurUpdate.setSpecialiteExp(formateur.getSpecialiteExp());
			formateurUpdate.setDescriptionExp(formateur.getDescriptionExp());
			
			
			repositoryformateur.save(formateurUpdate);
			return formateurUpdate;
		} else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant : " + formateur.getIdformateur());
		}
			
	}

	@Override
	public List<Formateur> getAllFormateur() {
		
		return repositoryformateur.findAll();
	}

	@Override
	public Formateur getFormateurById(long idFormateur) {
		
		Optional<Formateur> f=this.repositoryformateur.findById(idFormateur);
		
		if(f.isPresent()) {return f.get();}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant : " + idFormateur);
		}

	}

	@Override
	public void deleteFormateur(long idFormateur) {
		
	Optional<Formateur> f=this.repositoryformateur.findById(idFormateur);
		
		if(f.isPresent()) { this.repositoryformateur.delete(f.get());}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant : " + idFormateur);
		}
		
	}

}
