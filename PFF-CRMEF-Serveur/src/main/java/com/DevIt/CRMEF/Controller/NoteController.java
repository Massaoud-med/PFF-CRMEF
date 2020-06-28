package com.DevIt.CRMEF.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.DevIt.CRMEF.Entity.Note;
import com.DevIt.CRMEF.Repository.NoteRepository;
import com.DevIt.CRMEF.Service.implement.noteServiceImpl;



/**
 * @author ZAROUQ
 *
 */
@RestController
//CrossOriginest est un mécanisme qui permet partage de ressources entre origines multiples.
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class NoteController {

	
	@Autowired
	private NoteRepository noteRepository;
	
	@Autowired
	private noteServiceImpl noteService;
	
	
	/**
	 * @return List des reclmations http://localhost:8080/api/v1/reclamations
	 */

		@GetMapping("/notes")
		public ResponseEntity<List<Note>> getAllNotes() {
			return ResponseEntity.ok().body(noteService.getAllNote());
	    }
		/**
		 * @param idRec
		 * @return reclamtion par son Id http://localhost:8080/api/v1/reclamations/id
		 */
		
	    @GetMapping("/notes/{id}")
		public ResponseEntity<Note> getReclamationById(@PathVariable("id") long noteId) {
			return ResponseEntity.ok().body(noteService.getNoteById(noteId));
        }
	    
		/**
		 * Ajouter un ou plusieurs Reclamation, enoyer avec la methode Post
		 * http://localhost:8080/api/v1/reclamation
		 * 
		 * @param reclamation
		 * @return
		 */
		
	    @PostMapping("/notes")
		public ResponseEntity<Note> createReclamation(@RequestBody Note note) {
			return ResponseEntity.ok().body(this.noteService.createNote(note));
	    }
		/**
		 * @param idRec
		 * @param reclamation
		 * @return ResponseEntity qui contient la modification que j'ai fait sur un
		 *         eréclamation, enoyer avec la methode Put.
		 *         http://localhost:8080/api/v1/reclamation
		 * 
		 */
	
	  /*  @PutMapping("/notes/{id}")
		public ResponseEntity<Note> updateReclamation(@PathVariable("id") long idNote,
				@RequestBody Note note) {
	    	note.setIdNote(idNote);
			return ResponseEntity.ok().body(this.noteService.updateNote(note));	
	        }*/
	    
		/**
		 * @param idRec
		 * @return un message "ok" si il est supprimé ce reclamation avec id 
		 *  http://localhost:8080/api/v1/reclamation/id
		 */
	  
	    @DeleteMapping("/notes/{id}")
	    public String deleteReclamation(@PathVariable("id") long noteId) {
			this.noteService.deleteNote(noteId);

			return "OK";
	        }
	    
		@RequestMapping(value = "/UploadExcel", method = RequestMethod.POST)
		public ResponseEntity<List<Note>> importExcelFile(@RequestParam("file") MultipartFile files) throws IOException {
			HttpStatus status = HttpStatus.OK;
			List<Note> productList = new ArrayList<>();

			XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream());
			XSSFSheet worksheet = workbook.getSheetAt(0);

			for (int index = 0; index < worksheet.getPhysicalNumberOfRows(); index++) {
				if (index > 0) {
					Note product = new Note();

					XSSFRow row = worksheet.getRow(index);
					Long id = (long) row.getCell(0).getNumericCellValue();

					product.setIdNote(id);
					product.setNumInscription((long) row.getCell(1).getNumericCellValue());
					product.setNomComplet(row.getCell(2).getStringCellValue());
					product.setXXXX(row.getCell(3).getStringCellValue());
					product.setNote1((float) row.getCell(4).getNumericCellValue());
					product.setNote2((long) row.getCell(5).getNumericCellValue());
					product.setNoteMoyenne((long) row.getCell(6).getNumericCellValue());
					product.setRemarque(row.getCell(7).getStringCellValue());
					productList.add(product);
				}
			}

			return new ResponseEntity<>(noteRepository.saveAll(productList), status);
		}
}
