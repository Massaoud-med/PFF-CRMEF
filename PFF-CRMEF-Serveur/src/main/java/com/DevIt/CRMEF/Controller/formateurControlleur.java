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

import com.DevIt.CRMEF.Entity.Formateur;
import com.DevIt.CRMEF.Service.implement.formateurServiceImpl;





/**
 * @author ZAROUQ
 *
 */
@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")

public class formateurControlleur {
	
	@Autowired
	private formateurServiceImpl formateurServiceImpl;

		@GetMapping("/formateurs")
		public ResponseEntity<List<Formateur>> getAllFormateur() {
			return ResponseEntity.ok().body(formateurServiceImpl.getAllFormateur());
		}
		
		
	    @GetMapping("/formateurs/{id}")
		public ResponseEntity<Formateur> getFormateurById(@PathVariable("id") long idFormateur) {
			return ResponseEntity.ok().body(formateurServiceImpl.getFormateurById(idFormateur));
        }
	    
        
		
	    @PostMapping("/formateurs")
		public ResponseEntity<Formateur> createFormateur(@RequestBody Formateur formateur) {
			return ResponseEntity.ok().body(this.formateurServiceImpl.createFormateur(formateur));
	    }

	
	    @PutMapping("/formateurs/{id}")
		public ResponseEntity<Formateur> updateFormateurs(@PathVariable("id") long idformateur,
				@RequestBody Formateur formateur) {
	    	formateur.setIdformateur(idformateur);
			return ResponseEntity.ok().body(this.formateurServiceImpl.updateFormateur(formateur));	
	        }
	  
	    @DeleteMapping("/formateurs/{id}")
	    public String deleteFormateur(@PathVariable("id") long idFormateur) {
			this.formateurServiceImpl.deleteFormateur(idFormateur);

			return "OK";
	        }

}
