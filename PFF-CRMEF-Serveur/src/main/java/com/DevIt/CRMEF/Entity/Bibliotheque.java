package com.DevIt.CRMEF.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bibliotheque {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idBib;
	private String titre;
	private String matiere;
	private String departement;
	private String type;
	private String etat;
	
	public Bibliotheque() {
	
	}

	public Bibliotheque(String titre, String matiere, String departement, String annee, String type, String etat) {
		super();
		this.titre = titre;
		this.matiere = matiere;
		this.departement = departement;
		this.type = type;
		this.etat = etat;
	}

	public Long getIdBib() {
		return idBib;
	}

	public void setIdBib(Long idBib) {
		this.idBib = idBib;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getMatiere() {
		return matiere;
	}

	public void setMatiere(String matiere) {
		this.matiere = matiere;
	}

	public String getDepartement() {
		return departement;
	}

	public void setDepartement(String departement) {
		this.departement = departement;
	}


	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}
	
	
	
	
	
}
