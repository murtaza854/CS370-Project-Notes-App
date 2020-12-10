import { Notes } from './../../interfaces/notes';
import { NotesService } from './../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  noteslist:Notes[]=[];
  // private _notesService:NotesService
  constructor(private _notesService:NotesService, private router: Router) {
  }

  ngOnInit(): void {
    this.noteslist = this._notesService.getNotes();
  }

  addNote(data:any) {
    if (data.noteTitle == '') alert('Note title must not be empty.');
    else {
      this._notesService.updateNoteslist(data);
      this.router.navigateByUrl('/');
    }
  }

}
