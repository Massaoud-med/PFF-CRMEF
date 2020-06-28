package com.DevIt.CRMEF.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Emploi {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idEmploi;
	
	@ManyToOne()
	@JoinColumn(name="filiere_id")
	private Filiere filiere;
	
    @OneToOne(mappedBy = "emploi")
    private Formateur formateur;

}
