import { Component, OnInit } from '@angular/core';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../../shared/note.models';
import { NotesService } from '../../shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // find out if we are creating a new note or editing an existing one
    this.route.params.subscribe((params: Params) =>{
      this.note = new Note();
      if (params.id){
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      }else{
        this.new = true;
      }
    })
 
  }
onSubmit(form: NgForm){
  if (this.new){
    // save the note
    this.notesService.addNote(form.value);
    
  } else{
    this.notesService.update(this.noteId, form.value.title,form.value.body)
  }
  this.router.navigateByUrl('/')
}
cancel(){
  this.router.navigateByUrl('/')
}
}

