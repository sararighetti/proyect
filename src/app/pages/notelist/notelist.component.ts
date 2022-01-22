import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from '../../shared/note.models';


@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private noteService: NotesService) { }

  ngOnInit(){
    // Retrieve all notes from service
    this.notes = this.noteService.getAll();
  }

}
