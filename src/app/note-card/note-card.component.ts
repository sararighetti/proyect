import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @ViewChild ('bodyText') bodyText: ElementRef<HTMLElement> | undefined;
 
  constructor() { }
  @Input() title:string | undefined;
  @Input() body:string | undefined;

  ngOnInit(): void {
  }

}
