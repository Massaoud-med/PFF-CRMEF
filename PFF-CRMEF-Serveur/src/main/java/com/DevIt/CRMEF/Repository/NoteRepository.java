package com.DevIt.CRMEF.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DevIt.CRMEF.Entity.Note;
@Repository
public interface NoteRepository  extends JpaRepository<Note, Long>{

}
