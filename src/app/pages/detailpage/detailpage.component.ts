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
  noteTitle:string="";
  noteT:string="";
  nId:number = -1;
  constructor(private _notesService:NotesService, private router: Router) {
    this.noteTitle = "";
    this.noteT = "";
    if (this.router.getCurrentNavigation()?.extras.state != undefined) {
      this.noteslist = this._notesService.getNotes();
      const id:number = this.router.getCurrentNavigation()?.extras.state?.id;
      for (let index = 0; index < this.noteslist.length; index++) {
        const element = this.noteslist[index];
        if (element.id == id) {
          this.noteTitle = element.title;
          this.noteT = element.note;
          this.nId = id;
          break;
        }
      }
    }
  }

  ngOnInit(): void {
  }

  addNote(data:any) {

    this._notesService.deleteNote(this.nId);
    console.log(data);
    if (data.noteTitle == '') alert('Note title must not be empty.');
    else {
      this._notesService.updateNoteslist(data);
      this.router.navigateByUrl('/');
    }
  }

}
