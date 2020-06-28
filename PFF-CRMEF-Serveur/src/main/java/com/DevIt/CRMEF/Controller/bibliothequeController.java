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

import com.DevIt.CRMEF.Entity.Bibliotheque;
import com.DevIt.CRMEF.Service.implement.bibliothequeServiceImpl;

/**
 * @author ZAROUQ
 *
 */
@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")

public class bibliothequeController {
	
	@Autowired
	private bibliothequeServiceImpl bibliothequeServiceImpl;

		@GetMapping("/bibliotheque")
		public ResponseEntity<List<Bibliotheque>> getAllbibliotheque() {
			return ResponseEntity.ok().body(bibliothequeServiceImpl.getAllBibliotheque());
		}
		
		
	    @GetMapping("/bibliotheque/{id}")
		public ResponseEntity<Bibliotheque> getBibliothequeById(@PathVariable("id") long idBib) {
			return ResponseEntity.ok().body(bibliothequeServiceImpl.getBibliothequeById(idBib));
        }
	    
        
		
	    @PostMapping("/bibliotheque")
		public ResponseEntity<Bibliotheque> createBibliotheque(@RequestBody Bibliotheque bibliotheque) {
			return ResponseEntity.ok().body(this.bibliothequeServiceImpl.createBibliotheque(bibliotheque));
	    }

	
	    @PutMapping("/bibliotheque/{id}")
		public ResponseEntity<Bibliotheque> updateFormateurs(@PathVariable("id") long idBib,
				@RequestBody Bibliotheque bibliotheque ) {
	    	bibliotheque.setIdBib(idBib);
			return ResponseEntity.ok().body(this.bibliothequeServiceImpl.updateBibliotheque(bibliotheque));	
	        }
	  
	    @DeleteMapping("/bibliotheque/{id}")
	    public String deleteBibliotheque(@PathVariable("id") long idBib) {
			this.bibliothequeServiceImpl.deleteBibliotheque(idBib);

			return "OK";
	        }

}
