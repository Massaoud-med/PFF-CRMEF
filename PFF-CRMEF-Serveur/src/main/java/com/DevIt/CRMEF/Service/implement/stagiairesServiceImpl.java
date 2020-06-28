package com.DevIt.CRMEF.Service.implement;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DevIt.CRMEF.Entity.Stagiaire;
import com.DevIt.CRMEF.Repository.StagiaireRepository;
import com.DevIt.CRMEF.Service.stagiairesService;

@Service
@Transactional
public class stagiairesServiceImpl implements stagiairesService {
	private byte[] bytes;
	@Autowired
	private StagiaireRepository stgRepository;

	@Override
	public Stagiaire createStagiaire(Stagiaire stagiaire) {
		stagiaire.setPicByte(this.bytes);
		return stgRepository.save(stagiaire);
	}

	@Override
	public Stagiaire updateStagiaire(Stagiaire stagiaire) {
		Optional<Stagiaire> stagiaireDb = this.stgRepository.findById(stagiaire.getIdStag());

		if (stagiaireDb.isPresent()) {
			Stagiaire stagiaireUpdate = stagiaireDb.get();
			
			//personnel
			stagiaireUpdate.setCodeApoge(stagiaire.getCodeApoge());
			stagiaireUpdate.setCin(stagiaire.getCin());
			stagiaireUpdate.setCne(stagiaire.getCne());
			stagiaireUpdate.setNomPrenom(stagiaire.getNomPrenom());
			stagiaireUpdate.setDateNais(stagiaire.getDateNais());
			stagiaireUpdate.setLieuNais(stagiaire.getLieuNais());
			stagiaireUpdate.setTele(stagiaire.getTele());
			stagiaireUpdate.setEmail(stagiaire.getEmail());
			stagiaireUpdate.setAdresse(stagiaire.getAdresse());
			stagiaireUpdate.setCorpsEducatif(stagiaire.getCorpsEducatif());
			stagiaireUpdate.setSpecialite(stagiaire.getSpecialite());
			stagiaireUpdate.setStuation(stagiaire.getStuation());
			stagiaireUpdate.setHandicap(stagiaire.getHandicap());
			stagiaireUpdate.setSexe(stagiaire.getSexe());
			stagiaireUpdate.setPicByte(stagiaire.getPicByte());

			// Licence

			stagiaireUpdate.setDernierDiplome(stagiaire.getDernierDiplome());
			stagiaireUpdate.setSpecialiteDiplome(stagiaire.getSpecialiteDiplome());
			stagiaireUpdate.setFaculterObtenuDiplome(stagiaire.getFaculterObtenuDiplome());
			stagiaireUpdate.setMentionDiplome(stagiaire.getMentionDiplome());
			stagiaireUpdate.setAnneeDiplome(stagiaire.getAnneeDiplome());
			stagiaireUpdate.setNoteObtenuDiplome(stagiaire.getNoteObtenuDiplome());

			// BAC
			stagiaireUpdate.setSerieBac(stagiaire.getSerieBac());
			stagiaireUpdate.setMentionBac(stagiaire.getMentionBac());
			stagiaireUpdate.setAnneeObtenu(stagiaire.getAnneeObtenu());
			stagiaireUpdate.setProvinceObtenu(stagiaire.getProvinceObtenu());
			stagiaireUpdate.setNoteObtenuBac(stagiaire.getNoteObtenuBac());
			stagiaireUpdate.setAcademie(stagiaire.getAcademie());

			// parent
			stagiaireUpdate.setNomPere(stagiaire.getNomPere());
			stagiaireUpdate.setNomMere(stagiaire.getNomMere());
			stagiaireUpdate.setProfesionPere(stagiaire.getProfesionPere());
			stagiaireUpdate.setProfesionMere(stagiaire.getProfesionMere());
			stagiaireUpdate.setCodePostale(stagiaire.getCodePostale());
			stagiaireUpdate.setAdresseParents(stagiaire.getAdresseParents());
			stagiaireUpdate.setTeleParent(stagiaire.getTeleParent());
			stagiaireUpdate.setTeleFixParent(stagiaire.getTeleFixParent());

			stgRepository.save(stagiaireUpdate);
			return stagiaireUpdate;
		} else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant : " + stagiaire.getIdStag());
		}
	}

	@Override
	public List<Stagiaire> getAllStagiaire() {

		return this.stgRepository.findAll();
	}

	@Override
	public Stagiaire getStagiaireById(long stgId) {
		Optional<Stagiaire> noteDb = this.stgRepository.findById(stgId);

		if (noteDb.isPresent()) {
			return noteDb.get();
		} else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant : " + stgId);
		}
	}

	@Override
	public void deleteStagiaire(long stgcId) {

		Optional<Stagiaire> stgtDb = this.stgRepository.findById(stgcId);

		if (stgtDb.isPresent()) {
			this.stgRepository.delete(stgtDb.get());
		} else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec l'identifiant: " + stgcId);
		}

	}

}
