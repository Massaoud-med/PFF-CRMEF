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

import com.DevIt.CRMEF.Entity.Vacance;
import com.DevIt.CRMEF.Service.implement.vacanceServiceImp;



/**
 * @author ZAROUQ
 *
 */
@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class vacanceController {
	
	@Autowired
	private vacanceServiceImp serviceImp;

		@GetMapping("/vacance")
		public ResponseEntity<List<Vacance>> getAllVacance() {
			return ResponseEntity.ok().body(serviceImp.getAllVacance());
		}
		
		
	    @GetMapping("/vacance/{id}")
		public ResponseEntity<Vacance> getvacanceById(@PathVariable("id") long idVac) {
			return ResponseEntity.ok().body(serviceImp.getVacanceById(idVac));
        }
	    
        
		
	    @PostMapping("/vacance")
		public ResponseEntity<Vacance> createVacance(@RequestBody Vacance vacance) {
			return ResponseEntity.ok().body(this.serviceImp.createVacance(vacance));
	    }

	
	    @PutMapping("/vacance/{id}")
		public ResponseEntity<Vacance> updateVacance(@PathVariable("id") long idVac,
				@RequestBody Vacance vacance ) {
	    	vacance.setIdVac(idVac);
			return ResponseEntity.ok().body(this.serviceImp.updateVacance(vacance));	
	        }
	  
	    @DeleteMapping("/vacance/{id}")
	    public String deleteBibliotheque(@PathVariable("id") long idVac) {
			this.serviceImp.deleteVacance(idVac);;

			return "OK";
	        }


}
