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

import com.DevIt.CRMEF.Entity.Reclamation;
import com.DevIt.CRMEF.Service.implement.reclamationServiceImpl;

/**
 * @author ZAROUQ
 *
 */

@RestController
// CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")

public class ReclamationController {

	// injection
	@Autowired
	private reclamationServiceImpl reclamationService;

	/**
	 * @return List des reclmations http://localhost:8080/api/v1/reclamations
	 */
	@GetMapping("/reclamations")
	public ResponseEntity<List<Reclamation>> getAllReclamation() {
		return ResponseEntity.ok().body(reclamationService.getAllReclamation());
	}

	/**
	 * @param idRec
	 * @return reclamtion par son Id http://localhost:8080/api/v1/reclamations/id
	 */
	@GetMapping("/reclamations/{idRec}")
	public ResponseEntity<Reclamation> getReclamationById(@PathVariable long idRec) {
		return ResponseEntity.ok().body(reclamationService.getReclamationById(idRec));
	}

	/**
	 * Ajouter un ou plusieurs Reclamation, enoyer avec la methode Post
	 * http://localhost:8080/api/v1/reclamation
	 * 
	 * @param reclamation
	 * @return
	 */
	@PostMapping("/reclamations")
	public ResponseEntity<Reclamation> createReclamation(@RequestBody Reclamation reclamation) {
		return ResponseEntity.ok().body(this.reclamationService.createReclamation(reclamation));
	}

	/**
	 * @param idRec
	 * @param reclamation
	 * @return ResponseEntity qui contient la modification que j'ai fait sur un
	 *         eréclamation, enoyer avec la methode Put.
	 *         http://localhost:8080/api/v1/reclamation
	 * 
	 */
	@PutMapping("/reclamations/{idRec}")
	public ResponseEntity<Reclamation> updateReclamation(@PathVariable long idRec,
			@RequestBody Reclamation reclamation) {
		reclamation.setIdRec(idRec);
		return ResponseEntity.ok().body(this.reclamationService.updateReclamation(reclamation));
	}

	/**
	 * @param idRec
	 * @return un message "ok" si il est supprimé ce reclamation avec id 
	 *  http://localhost:8080/api/v1/reclamation/id
	 */
	@DeleteMapping("/reclamations/{idRec}")
	public String deleteReclamation(@PathVariable long idRec) {
		this.reclamationService.deleteReclamation(idRec);

		return "OK";
	}
}
