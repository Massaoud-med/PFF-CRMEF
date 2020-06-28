package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Vacance;

public interface vacanceService {
	
	Vacance createVacance(Vacance vacance);

	Vacance updateVacance(Vacance vacance);

	List<Vacance> getAllVacance();

	Vacance getVacanceById(long idVac);

	void deleteVacance(long idVac);

}
