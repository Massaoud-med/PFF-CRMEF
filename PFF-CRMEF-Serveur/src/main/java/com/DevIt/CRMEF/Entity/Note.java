package com.DevIt.CRMEF.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Note {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idNote;
	private long numInscription;
	private String nomComplet;
	private String XXXX;
	private float Note1;
	private long Note2;
	private long NoteMoyenne;
	private String remarque;
	
	@OneToMany( mappedBy = "note",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Stagiaire> reclamations;

	public Note() {
}

	public Note(long numInscription, String nomComplet, String xXXX, float Note1, long note2, long noteMoyenne,
			String remarque) {
		super();
		this.numInscription = numInscription;
		this.nomComplet = nomComplet;
		this.XXXX = xXXX;
		this.Note1 = Note1;
		this.Note2 = note2;
		this.NoteMoyenne = noteMoyenne;
		this.remarque = remarque;
	}

	public long getIdNote() {
		return idNote;
	}

	public void setIdNote(long idNote) {
		this.idNote = idNote;
	}

	public long getNumInscription() {
		return numInscription;
	}

	public void setNumInscription(long numInscription) {
		this.numInscription = numInscription;
	}

	public String getNomComplet() {
		return nomComplet;
	}

	public void setNomComplet(String nomComplet) {
		this.nomComplet = nomComplet;
	}

	public String getXXXX() {
		return XXXX;
	}

	public void setXXXX(String xXXX) {
		XXXX = xXXX;
	}

	public float getNote1() {
		return Note1;
	}

	public void setNote1(float f) {
		Note1 = f;
	}

	public long getNote2() {
		return Note2;
	}

	public void setNote2(long note2) {
		Note2 = note2;
	}

	public long getNoteMoyenne() {
		return NoteMoyenne;
	}

	public void setNoteMoyenne(long noteMoyenne) {
		NoteMoyenne = noteMoyenne;
	}

	public String getRemarque() {
		return remarque;
	}

	public void setRemarque(String remarque) {
		this.remarque = remarque;
	}

	@Override
	public String toString() {
		return "Note [idNote=" + idNote + ", numInscription=" + numInscription + ", nomComplet=" + nomComplet
				+ ", XXXX=" + XXXX + ", Note1=" + Note1 + ", Note2=" + Note2 + ", NoteMoyenne=" + NoteMoyenne
				+ ", remarque=" + remarque + "]";
	}
	
	
	
	
}
