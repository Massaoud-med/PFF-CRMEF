package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Stagiaire;

public interface stagiairesService {
	
	Stagiaire createStagiaire(Stagiaire stagiaire);

	Stagiaire updateStagiaire(Stagiaire stagiaire);

	List<Stagiaire> getAllStagiaire();

	Stagiaire getStagiaireById(long stgId);

	void deleteStagiaire(long stgcId);

}
