package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Formateur;

public interface formateurService {
	
	Formateur createFormateur(Formateur formateur);

	Formateur updateFormateur(Formateur formateur);

	List<Formateur> getAllFormateur();

	Formateur getFormateurById(long idFormateur);

	void deleteFormateur(long idFormateur);

}
