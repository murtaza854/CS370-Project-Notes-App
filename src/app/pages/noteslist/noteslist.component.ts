import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  // public addToNoteslist(data:any) {
  //   console.log(data);
  //   console.log('Data passed');
  // }
}
