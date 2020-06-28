package com.DevIt.CRMEF.Entity;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity

public class Filiere {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idFil;
	private String nomFil;

	@OneToMany( mappedBy = "filiere",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Stagiaire> stagiaires;
	
	@ManyToOne()
	@JoinColumn(name="dep_id")
	private Departement departement;
	
	@OneToMany( mappedBy = "filiere",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Cours> cours;
	
	@OneToMany( mappedBy = "filiere",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Emploi> emplois;


	public Filiere(String nomFil, Collection<Stagiaire> stagiaires) {
		super();
		this.nomFil = nomFil;

	}

	public Filiere() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getIdFil() {
		return idFil;
	}

	public void setIdFil(long idFil) {
		this.idFil = idFil;
	}

	public String getNomFil() {
		return nomFil;
	}

	public void setNomFil(String nomFil) {
		this.nomFil = nomFil;
	}



}
