package com.DevIt.CRMEF.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DevIt.CRMEF.Entity.Filiere;
import com.DevIt.CRMEF.Service.implement.filierServiceImpl;


@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class FilierController {
	
	@Autowired
	private filierServiceImpl f;

	@GetMapping("/filiers")
	public ResponseEntity<List<Filiere>> getAllFiliers() {
		return ResponseEntity.ok().body(f.getAllFilier());
    }
	
	
    @GetMapping("/filiers/{id}")
	public ResponseEntity<Filiere> getFilierById(@PathVariable("id") long idFil) {
		return ResponseEntity.ok().body(f.getFilierById(idFil));
    }
    
}
