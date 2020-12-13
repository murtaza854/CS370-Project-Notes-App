import { Component, OnInit } from '@angular/core';
import { Notes } from './../../interfaces/notes';
import { NotesService } from './../../services/notes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent implements OnInit {
  noteslist:Notes[]=[];
  constructor(private _notesService:NotesService, private router: Router) {
    this.noteslist = this._notesService.getNotes();
  }

  ngOnInit(): void {
  }
  openNote(id:number) {
    // this._notesService.deleteNote(id);
    // this._notesService.openNote(id);
    this.router.navigateByUrl('/edit', { state: { id:id} });
  }
  // public addToNoteslist(data:any) {
  //   console.log(data);
  //   console.log('Data passed');
  // }
}
