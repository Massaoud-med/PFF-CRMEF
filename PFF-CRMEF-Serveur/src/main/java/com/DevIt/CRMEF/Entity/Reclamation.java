package com.DevIt.CRMEF.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reclamations")
public class Reclamation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idRec;

	@Column(name = "type_Rec")
	private String typeRec;

	@Column(name = "desc_Rec")
	private String description;

	@Column(name = "etat_Rec")
	private String etat;

	private String nomStg;
	private String filierStg;
	
	@ManyToOne()
	@JoinColumn(name="stg_id")
	private Stagiaire stagiaire;
	
	@ManyToOne()
	@JoinColumn(name="formateur_id")
	private Formateur formateur;

	public Reclamation() {

	}

	public String getNomStg() {
		return nomStg;
	}

	public void setNomStg(String nomStg) {
		this.nomStg = nomStg;
	}

	public String getFilierStg() {
		return filierStg;
	}

	public void setFilierStg(String filierStg) {
		this.filierStg = filierStg;
	}

	public Reclamation(String typeRec, String description, String etat, String nomStg, String filierStg) {
		super();
		this.typeRec = typeRec;
		this.description = description;
		this.etat = etat;
		this.nomStg = nomStg;
		this.filierStg = filierStg;
	}

	public long getIdRec() {
		return idRec;
	}

	public void setIdRec(long idRec) {
		this.idRec = idRec;
	}

	public String getTypeRec() {
		return typeRec;
	}

	public void setTypeRec(String typeRec) {
		this.typeRec = typeRec;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEtat() {
		return "En Cours";
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

}
