package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Reclamation;

public interface reclamationService {

	Reclamation createReclamation(Reclamation reclamation);

	Reclamation updateReclamation(Reclamation reclamation);

	List<Reclamation> getAllReclamation();

	Reclamation getReclamationById(long recId);

	void deleteReclamation(long recId);

}
