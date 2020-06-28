package com.DevIt.CRMEF.Service.implement;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DevIt.CRMEF.Entity.Vacance;
import com.DevIt.CRMEF.Repository.VacanceRepository;
import com.DevIt.CRMEF.Service.vacanceService;

@Service
@Transactional
public class vacanceServiceImp implements vacanceService{

	
	@Autowired
	private VacanceRepository vacanceRepository;
	
	@Override
	public Vacance createVacance(Vacance vacance) {
		
		return vacanceRepository.save(vacance);
	}

	@Override
	public Vacance updateVacance(Vacance vacance) {
	
		Optional<Vacance> vacanceDB =this.vacanceRepository.findById(vacance.getIdVac());

		if(vacanceDB.isPresent()) {
			
			Vacance vacanceUpdate=vacanceDB.get();
			vacanceUpdate.setIdVac(vacance.getIdVac());
			vacanceUpdate.setTiterVac(vacance.getTiterVac());
			vacanceUpdate.setTypeVac(vacance.getTypeVac());
			vacanceUpdate.setDetailsVac(vacance.getDetailsVac());
			vacanceUpdate.setFinVac(vacance.getFinVac());
			vacanceUpdate.setDebutVac(vacance.getDebutVac());
			vacanceRepository.save(vacanceUpdate);
			return vacanceUpdate;
		} else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec id : " + vacance.getIdVac());
		}
	}

	@Override
	public List<Vacance> getAllVacance() {
		
		return vacanceRepository.findAll();
	}

	@Override
	public Vacance getVacanceById(long idVac) {
	
		Optional<Vacance> f=this.vacanceRepository.findById(idVac);
		
		if(f.isPresent()) {return f.get();}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec id : " + idVac);
		}
	}

	@Override
	public void deleteVacance(long idVac) {
		
	Optional<Vacance> f=this.vacanceRepository.findById(idVac);
		
		if(f.isPresent()) { this.vacanceRepository.delete(f.get());}
		else {
			throw new com.DevIt.CRMEF.Exeption.ResourceNotFoundException(
					"Enregistrement introuvable avec id : " + idVac);
		}
		
	}

}
