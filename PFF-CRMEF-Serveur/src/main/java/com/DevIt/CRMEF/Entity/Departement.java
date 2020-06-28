package com.DevIt.CRMEF.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Departement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idDep;
	private String nomDep;
	private String responsableDep;
	private String teleDep;
	private String emailDep;
	private Long capaciteDep;
	
	@OneToMany( mappedBy = "departement",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Filiere> filieres;
	
	public Departement() {

	}

	public Departement(String nomDep, String responsableDep, String teleDep, String emailDep, Long capaciteDep) {
		super();
		this.nomDep = nomDep;
		this.responsableDep = responsableDep;
		this.teleDep = teleDep;
		this.emailDep = emailDep;
		this.capaciteDep = capaciteDep;
	}

	public Long getIdDep() {
		return idDep;
	}

	public void setIdDep(Long idDep) {
		this.idDep = idDep;
	}

	public String getNomDep() {
		return nomDep;
	}

	public void setNomDep(String nomDep) {
		this.nomDep = nomDep;
	}

	public String getResponsableDep() {
		return responsableDep;
	}

	public void setResponsableDep(String responsableDep) {
		this.responsableDep = responsableDep;
	}

	public String getTeleDep() {
		return teleDep;
	}

	public void setTeleDep(String teleDep) {
		this.teleDep = teleDep;
	}

	public String getEmailDep() {
		return emailDep;
	}

	public void setEmailDep(String emailDep) {
		this.emailDep = emailDep;
	}

	public Long getCapaciteDep() {
		return capaciteDep;
	}

	public void setCapaciteDep(Long capaciteDep) {
		this.capaciteDep = capaciteDep;
	}
	
	
	
	
	
	
	

}
