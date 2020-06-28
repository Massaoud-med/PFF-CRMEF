package com.DevIt.CRMEF.Service;

import java.util.List;

import com.DevIt.CRMEF.Entity.Note;


public interface noteService {

	Note createNote(Note note);

//	Note updateNote(Note note);

	List<Note> getAllNote();

	Note getNoteById(long noteId);

	void deleteNote(long noteId);
}
