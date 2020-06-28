package com.DevIt.CRMEF.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DevIt.CRMEF.Entity.Stagiaire;
import com.DevIt.CRMEF.Service.implement.stagiairesServiceImpl;


/**
 * @author ZAROUQ
 *
 */
@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")

public class stagiaireController {
	
	@Autowired
	private stagiairesServiceImpl serviceStagiaire;
	
	/**
	 * @return List des stagiaires http://localhost:8080/api/v1/stagiaires
	 */


		@GetMapping("/stagiaires")
		public ResponseEntity<List<Stagiaire>> getAllReclamation() {
			return ResponseEntity.ok().body(serviceStagiaire.getAllStagiaire());
	    }
		
		/**
		 * @param id
		 * @return stagiaire par son Id http://localhost:8080/api/v1/stagiaire/id
		 */
		
	    @GetMapping("/stagiaires/{id}")
		public ResponseEntity<Stagiaire> getReclamationById(@PathVariable("id") long stgId) {
			return ResponseEntity.ok().body(serviceStagiaire.getStagiaireById(stgId));
        }
	    
		/**
		 * Ajouter un ou plusieurs stagiaire, enoyer avec la methode Post
		 * http://localhost:8080/api/v1/stagiaire
		 * 
		 * @param stagiaire
		 * @return
		 */
        
		
	    @PostMapping("/stagiaires")
		public ResponseEntity<Stagiaire> createReclamation(@RequestBody Stagiaire stagiaire) {
			return ResponseEntity.ok().body(this.serviceStagiaire.createStagiaire(stagiaire));
	    }

		/**
		 * @param id
		 * @param reclamation
		 * @return ResponseEntity qui contient la modification que j'ai fait sur un
		 *         stagiaire, enoyer avec la methode Put.
		 *         http://localhost:8080/api/v1/stagiaire
		 * 
		 */
	
	    @PutMapping("/stagiaires/{id}")
		public ResponseEntity<Stagiaire> updateReclamation(@PathVariable("id") long idStag,
				@RequestBody Stagiaire stagiaire) {
			stagiaire.setIdStag(idStag);
			return ResponseEntity.ok().body(this.serviceStagiaire.updateStagiaire(stagiaire));	
	        }
	    
		/**
		 * @param id
		 * @return un message "ok" si il est supprimé ce stagiaire avec id 
		 *  http://localhost:8080/api/v1/stagiaire/id
		 */
	  
	    @DeleteMapping("/stagiaires/{id}")
	    public String deleteReclamation(@PathVariable("id") long stgcId) {
			this.serviceStagiaire.deleteStagiaire(stgcId);

			return "OK";
	        }
	    
	    
	
}

