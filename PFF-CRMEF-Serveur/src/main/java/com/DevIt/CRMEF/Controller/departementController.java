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

import com.DevIt.CRMEF.Entity.Departement;
import com.DevIt.CRMEF.Service.implement.departementServiceImpl;



/**
 * @author ZAROUQ
 *
 */
@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class departementController {
	
	@Autowired
	private departementServiceImpl departementServiceImpl;

		@GetMapping("/departemnts")
		public ResponseEntity<List<Departement>> getAllDepartement() {
			return ResponseEntity.ok().body(departementServiceImpl.getAllDepartement());
		}
		
		
	    @GetMapping("/departemnts/{id}")
		public ResponseEntity<Departement> getDepartementById(@PathVariable("id") long idDepartement) {
			return ResponseEntity.ok().body(departementServiceImpl.getDepartementById(idDepartement));
        }
	    
        
		
	    @PostMapping("/departemnts")
		public ResponseEntity<Departement> createDepartement(@RequestBody Departement departement) {
			return ResponseEntity.ok().body(this.departementServiceImpl.createDepartement(departement));
	    }

	
	    @PutMapping("/departemnts/{id}")
		public ResponseEntity<Departement> updateDepertemnts(@PathVariable("id") long idDep,
				@RequestBody Departement departement) {
	    	departement.setIdDep(idDep);;
			return ResponseEntity.ok().body(this.departementServiceImpl.updateDepartement(departement));	
	        }
	  
	    @DeleteMapping("/departemnts/{id}")
	    public String deletedepertemnt(@PathVariable("id") long idDepartement) {
			this.departementServiceImpl.deleteDepartement(idDepartement);

			return "OK";
	        }


}
