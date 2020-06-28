package com.DevIt.CRMEF.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Vacance {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idVac;
	private String titerVac;
	private String typeVac;
	@Temporal(TemporalType.DATE)
	private Date debutVac;
	@Temporal(TemporalType.DATE)
	private Date finVac;
	private String detailsVac;
	
	public Vacance() {

	}

	public Vacance(String titerVac, String typeVac, Date debutVac, Date finVac, String detailsVac) {
		super();
		this.titerVac = titerVac;
		this.typeVac = typeVac;
		this.debutVac = debutVac;
		this.finVac = finVac;
		this.detailsVac = detailsVac;
	}

	public long getIdVac() {
		return idVac;
	}

	public void setIdVac(long idVac) {
		this.idVac = idVac;
	}

	public String getTiterVac() {
		return titerVac;
	}

	public void setTiterVac(String titerVac) {
		this.titerVac = titerVac;
	}

	public String getTypeVac() {
		return typeVac;
	}

	public void setTypeVac(String typeVac) {
		this.typeVac = typeVac;
	}

	public Date getDebutVac() {
		return debutVac;
	}

	public void setDebutVac(Date debutVac) {
		this.debutVac = debutVac;
	}

	public Date getFinVac() {
		return finVac;
	}

	public void setFinVac(Date finVac) {
		this.finVac = finVac;
	}

	public String getDetailsVac() {
		return detailsVac;
	}

	public void setDetailsVac(String detailsVac) {
		this.detailsVac = detailsVac;
	}
	
	

	
}
