package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Cours;

public interface CoursService {
	
	Cours createCours(Cours cours);

	Cours updateCours(Cours cours);

	List<Cours> getAllCours();

	Cours getCoursById(long idCours);

	void deleteCours(long idCours);
}
	


