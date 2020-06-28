package com.DevIt.CRMEF.Entity;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.boot.convert.DataSizeUnit;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "Stagiaires")
public class Stagiaire {

	// les Attribues Personnels
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_stg")
	private long idStag;
	private String cin;
	private String nomPrenom;
	private String lieuNais;
	@Temporal(TemporalType.DATE)
	private Date dateNais;
	private String adresse;
	private String tele;
	private String email;
	private String cne;
	private String specialite;
	private String corpsEducatif;
	@Column(name = "picByte", length = 1000)
	private byte[] picByte;
	private String sexe;
	private String handicap;
	private String stuation;

	// licence
	private String codeApoge;
	private String dernierDiplome;
	private String specialiteDiplome;
	private String mentionDiplome;
	private String faculterObtenuDiplome;
	private String anneeDiplome;
	private String noteObtenuDiplome;

	// Bac
	private String serieBac;
	private String mentionBac;
	private String anneeObtenu;
	private String provinceObtenu;
	private String noteObtenuBac;
	private String academie;

	// parent

	private String nomPere;
	private String nomMere;
	private String profesionPere;
	private String profesionMere;
	private String codePostale;
	private String teleParent;
	private String adresseParents;
	private String teleFixParent;
	
	@ManyToOne()
	@JoinColumn(name="filier_id")
	private Filiere filiere;
	
	@OneToMany( mappedBy = "stagiaire",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reclamation> reclamations;

	@ManyToOne()
	@JoinColumn(name="note_id")
	private Note note ;
	public Stagiaire() {

	}
	
	

	public Stagiaire(String cin, String nomPrenom, String lieuNais, Date dateNais, String adresse, String tele,
			String email, String cne, String specialite, String corpsEducatif, byte[] picByte,
			String sexe, String handicap, String stuation, String codeApoge, String dernierDiplome,
			String specialiteDiplome, String mentionDiplome, String faculterObtenuDiplome, String anneeDiplome,
			String noteObtenuDiplome, String serieBac, String mentionBac,
			String anneeObtenu, String provinceObtenu, String noteObtenuBac, String academie, String nomPere,
			String nomMere, String profesionPere, String profesionMere, String codePostale,
			String teleParent, String adresseParents, String teleFixParent) {
		super();
		this.cin = cin;
		this.nomPrenom = nomPrenom;
		this.lieuNais = lieuNais;
		this.dateNais = dateNais;
		this.adresse = adresse;
		this.tele = tele;
		this.email = email;
		this.cne = cne;
		this.specialite = specialite;
		this.corpsEducatif = corpsEducatif;
		this.picByte = picByte;
		this.sexe = sexe;
		this.handicap = handicap;
		this.stuation = stuation;
		this.codeApoge = codeApoge;
		this.dernierDiplome = dernierDiplome;
		this.specialiteDiplome = specialiteDiplome;
		this.mentionDiplome = mentionDiplome;
		this.faculterObtenuDiplome = faculterObtenuDiplome;
		this.anneeDiplome = anneeDiplome;
		this.noteObtenuDiplome = noteObtenuDiplome;
		this.serieBac = serieBac;
		this.mentionBac = mentionBac;
		this.anneeObtenu = anneeObtenu;
		this.provinceObtenu = provinceObtenu;
		this.noteObtenuBac = noteObtenuBac;
		this.academie = academie;
		this.nomPere = nomPere;
		this.nomMere = nomMere;
		this.profesionPere = profesionPere;
		this.profesionMere = profesionMere;
		this.codePostale = codePostale;
		this.teleParent = teleParent;
		this.adresseParents = adresseParents;
		this.teleFixParent = teleFixParent;
	}



	public String getAdresseParents() {
		return adresseParents;
	}

	public void setAdresseParents(String adresseParents) {
		this.adresseParents = adresseParents;
	}

	public long getIdStag() {
		return idStag;
	}

	public void setIdStag(long idStag) {
		this.idStag = idStag;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public String getNomPrenom() {
		return nomPrenom;
	}

	public void setNomPrenom(String nomPrenom) {
		this.nomPrenom = nomPrenom;
	}

	public String getLieuNais() {
		return lieuNais;
	}

	public void setLieuNais(String lieuNais) {
		this.lieuNais = lieuNais;
	}

	public Date getDateNais() {
		return dateNais;
	}

	public void setDateNais(Date dateNais) {
		this.dateNais = dateNais;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getTele() {
		return tele;
	}

	public void setTele(String tele) {
		this.tele = tele;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getHandicap() {
		return handicap;
	}

	public void setHandicap(String handicap) {
		this.handicap = handicap;
	}

	public String getStuation() {
		return stuation;
	}

	public void setStuation(String stuation) {
		this.stuation = stuation;
	}

	public String getCne() {
		return cne;
	}

	public void setCne(String cne) {
		this.cne = cne;
	}


	public String getSpecialite() {
		return specialite;
	}

	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}

	public String getCorpsEducatif() {
		return corpsEducatif;
	}

	public void setCorpsEducatif(String sorpsEducatif) {
		this.corpsEducatif = sorpsEducatif;
	}

	public String getCodeApoge() {
		return codeApoge;
	}

	public void setCodeApoge(String codeApoge) {
		this.codeApoge = codeApoge;
	}

	public String getDernierDiplome() {
		return dernierDiplome;
	}

	public void setDernierDiplome(String dernierDiplome) {
		this.dernierDiplome = dernierDiplome;
	}

	public String getSpecialiteDiplome() {
		return specialiteDiplome;
	}

	public void setSpecialiteDiplome(String specialiteDiplome) {
		this.specialiteDiplome = specialiteDiplome;
	}

	public String getMentionDiplome() {
		return mentionDiplome;
	}

	public void setMentionDiplome(String mentionDiplome) {
		this.mentionDiplome = mentionDiplome;
	}

	public String getFaculterObtenuDiplome() {
		return faculterObtenuDiplome;
	}

	public void setFaculterObtenuDiplome(String faculterObtenuDiplome) {
		this.faculterObtenuDiplome = faculterObtenuDiplome;
	}

	public String getAnneeDiplome() {
		return anneeDiplome;
	}

	public void setAnneeDiplome(String anneeDiplome) {
		this.anneeDiplome = anneeDiplome;
	}

	public String getNoteObtenuDiplome() {
		return noteObtenuDiplome;
	}

	public void setNoteObtenuDiplome(String noteObtenuDiplome) {
		this.noteObtenuDiplome = noteObtenuDiplome;
	}

	public String getSerieBac() {
		return serieBac;
	}

	public void setSerieBac(String serieBac) {
		this.serieBac = serieBac;
	}

	public String getMentionBac() {
		return mentionBac;
	}

	public void setMentionBac(String mentionBac) {
		this.mentionBac = mentionBac;
	}

	public String getAnneeObtenu() {
		return anneeObtenu;
	}

	public void setAnneeObtenu(String anneeObtenu) {
		this.anneeObtenu = anneeObtenu;
	}

	public String getProvinceObtenu() {
		return provinceObtenu;
	}

	public void setProvinceObtenu(String provinceObtenu) {
		this.provinceObtenu = provinceObtenu;
	}

	public String getNoteObtenuBac() {
		return noteObtenuBac;
	}

	public void setNoteObtenuBac(String noteObtenuBac) {
		this.noteObtenuBac = noteObtenuBac;
	}

	public String getAcademie() {
		return academie;
	}

	public void setAcademie(String academie) {
		this.academie = academie;
	}

	public String getNomPere() {
		return nomPere;
	}

	public void setNomPere(String nomPere) {
		this.nomPere = nomPere;
	}

	public String getNomMere() {
		return nomMere;
	}

	public void setNomMere(String nomMere) {
		this.nomMere = nomMere;
	}

	public String getProfesionPere() {
		return profesionPere;
	}

	public void setProfesionPere(String profesionPere) {
		this.profesionPere = profesionPere;
	}

	public String getProfesionMere() {
		return profesionMere;
	}

	public void setProfesionMere(String profesionMere) {
		this.profesionMere = profesionMere;
	}


	public String getCodePostale() {
		return codePostale;
	}

	public void setCodePostale(String codePostale) {
		this.codePostale = codePostale;
	}

	public String getTeleParent() {
		return teleParent;
	}

	public void setTeleParent(String teleParent) {
		this.teleParent = teleParent;
	}

	public String getTeleFixParent() {
		return teleFixParent;
	}

	public void setTeleFixParent(String teleFixParent) {
		this.teleFixParent = teleFixParent;
	}

}
