package com.DevIt.CRMEF.Entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Formateur {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_stg")
	private long idformateur;
	private String numF;
	private String cin;
	private String nom;
	private String lieuNais;
	@Temporal(TemporalType.DATE)
	private Date dateNais;
	private String adresse;
	private String tele;
	private String email;
	private String sexe;
	private String situtionF;

	private String bacObention;
	@Temporal(TemporalType.DATE)
	private Date anneeObtentionBac;
	private String dernierDiplome;
	@Temporal(TemporalType.DATE)
	private Date anneeObtentionDiplome;
	private String specialiteDiplom;
	private String mentionDiplome;
	private String facObtentionDiplome;

	private String anneeExp;
	private String specialiteExp;
	private String descriptionExp;

	@OneToMany(mappedBy = "formateur", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reclamation> reclamations;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "emploi_id", referencedColumnName = "idEmploi")
	private Emploi emploi;

	public Formateur() {

	}

	public Formateur(long idformateur, String numF, String cin, String nom, String lieuNais, Date dateNais,
			String adresse, String tele, String email, String sexe, String situtionF, String bacObention,
			Date anneeObtentionBac, String dernierDiplome, Date anneeObtentionDiplome, String specialiteDiplom,
			String mentionDiplome, String facObtentionDiplome, String anneeExp, String specialiteExp,
			String descriptionExp) {
		super();
		this.idformateur = idformateur;
		this.numF = numF;
		this.cin = cin;
		this.nom = nom;
		this.lieuNais = lieuNais;
		this.dateNais = dateNais;
		this.adresse = adresse;
		this.tele = tele;
		this.email = email;
		this.sexe = sexe;
		this.situtionF = situtionF;
		this.bacObention = bacObention;
		this.anneeObtentionBac = anneeObtentionBac;
		this.dernierDiplome = dernierDiplome;
		this.anneeObtentionDiplome = anneeObtentionDiplome;
		this.specialiteDiplom = specialiteDiplom;
		this.mentionDiplome = mentionDiplome;
		this.facObtentionDiplome = facObtentionDiplome;
		this.anneeExp = anneeExp;
		this.specialiteExp = specialiteExp;
		this.descriptionExp = descriptionExp;
	}

	public long getIdformateur() {
		return idformateur;
	}

	public void setIdformateur(long idformateur) {
		this.idformateur = idformateur;
	}

	public String getNumF() {
		return numF;
	}

	public void setNumF(String numF) {
		this.numF = numF;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
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

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getSitutionF() {
		return situtionF;
	}

	public void setSitutionF(String situtionF) {
		this.situtionF = situtionF;
	}

	public String getBacObention() {
		return bacObention;
	}

	public void setBacObention(String bacObention) {
		this.bacObention = bacObention;
	}

	public Date getAnneeObtentionBac() {
		return anneeObtentionBac;
	}

	public void setAnneeObtentionBac(Date anneeObtentionBac) {
		this.anneeObtentionBac = anneeObtentionBac;
	}

	public String getDernierDiplome() {
		return dernierDiplome;
	}

	public void setDernierDiplome(String dernierDiplome) {
		this.dernierDiplome = dernierDiplome;
	}

	public Date getAnneeObtentionDiplome() {
		return anneeObtentionDiplome;
	}

	public void setAnneeObtentionDiplome(Date anneeObtentionDiplome) {
		this.anneeObtentionDiplome = anneeObtentionDiplome;
	}

	public String getSpecialiteDiplom() {
		return specialiteDiplom;
	}

	public void setSpecialiteDiplom(String specialiteDiplom) {
		this.specialiteDiplom = specialiteDiplom;
	}

	public String getMentionDiplome() {
		return mentionDiplome;
	}

	public void setMentionDiplome(String mentionDiplome) {
		this.mentionDiplome = mentionDiplome;
	}

	public String getFacObtentionDiplome() {
		return facObtentionDiplome;
	}

	public void setFacObtentionDiplome(String facObtentionDiplome) {
		this.facObtentionDiplome = facObtentionDiplome;
	}

	public String getAnneeExp() {
		return anneeExp;
	}

	public void setAnneeExp(String anneeExp) {
		this.anneeExp = anneeExp;
	}

	public String getSpecialiteExp() {
		return specialiteExp;
	}

	public void setSpecialiteExp(String specialiteExp) {
		this.specialiteExp = specialiteExp;
	}

	public String getDescriptionExp() {
		return descriptionExp;
	}

	public void setDescriptionExp(String descriptionExp) {
		this.descriptionExp = descriptionExp;
	}

}
