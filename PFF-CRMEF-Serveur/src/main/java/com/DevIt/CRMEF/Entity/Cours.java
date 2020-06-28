package com.DevIt.CRMEF.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;import javax.persistence.TemporalType;

@Entity
public class Cours {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idCours;
	private String nomCours;
	private String formateurCours;
	private Integer salleCours;
	private String filiereCours;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCours;
	
	@ManyToOne()
	@JoinColumn(name="filier_id")
	private Filiere filiere;
	
	
	
	public Cours() {

	}


	public Cours(String nomCours, String formateurCours, Integer salleCours, String filiereCours, Date dateCours) {
		super();
		this.nomCours = nomCours;
		this.formateurCours = formateurCours;
		this.salleCours = salleCours;
		this.filiereCours = filiereCours;
		this.dateCours = dateCours;
	}


	public long getIdCours() {
		return idCours;
	}


	public void setIdCours(long idCours) {
		this.idCours = idCours;
	}


	public String getNomCours() {
		return nomCours;
	}


	public void setNomCours(String nomCours) {
		this.nomCours = nomCours;
	}


	public String getFormateurCours() {
		return formateurCours;
	}


	public void setFormateurCours(String formateurCours) {
		this.formateurCours = formateurCours;
	}


	public Integer getSalleCours() {
		return salleCours;
	}


	public void setSalleCours(Integer salleCours) {
		this.salleCours = salleCours;
	}


	public String getFiliereCours() {
		return filiereCours;
	}


	public void setFiliereCours(String filiereCours) {
		this.filiereCours = filiereCours;
	}


	public Date getDateCours() {
		return dateCours;
	}


	public void setDateCours(Date dateCours) {
		this.dateCours = dateCours;
	}
	
	
	
	
	

}
