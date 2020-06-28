package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Bibliotheque;

public interface bibliothequeService {
	
	Bibliotheque createBibliotheque(Bibliotheque bibliotheque);

	Bibliotheque updateBibliotheque(Bibliotheque bibliotheque);

	List<Bibliotheque> getAllBibliotheque();

	Bibliotheque getBibliothequeById(long idBib);

	void deleteBibliotheque(long idBib);

}
