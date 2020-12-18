import { FoldersService } from './../../services/folders.service';
import { folder } from './../../interfaces/folder';
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
  folderslist:folder[]=[];
  folderNotesflag:boolean;
  constructor(private _notesService:NotesService, private _foldersService:FoldersService, private router: Router) {
    if (this.router.url == '/') this.folderNotesflag = true;
    else this.folderNotesflag = false;
    if (this.router.getCurrentNavigation()?.extras.state != undefined) {
      this.noteslist = this.router.getCurrentNavigation()?.extras.state?.notes;
    } else {
      if (this.router.url.includes('favourites')) {
        this.noteslist = this._notesService.getFavourites();
        this.folderNotesflag = false;
      } else if (this.router.url.includes('recently-deleted')) {
        this.noteslist = this._notesService.recentDelete();
        this.folderNotesflag = false;
      } else {
        this.noteslist = this._notesService.getNotes();
      }
      this.folderslist = this._foldersService.getFolders();
    }
  }

  ngOnInit(): void {
  }
  openNote(id:number) {
    // this._notesService.deleteNote(id);
    // this._notesService.openNote(id);
    this.router.navigateByUrl('/edit', { state: { id:id} });
  }
  openFolder(id:number) {
    var noteIDs:number[] = this._foldersService.openFolder(id);
    var noteslist:Notes[]=[];
    this.noteslist.forEach(e => {
      if (noteIDs.includes(e.id)) {
        noteslist.push(e);
      }
    });
    this.router.navigateByUrl('/show-notes', { state: { notes:noteslist} });
  }
  markFavourite(id:number) {
    this.noteslist = this._notesService.markFavourite(id);
  }
  // public addToNoteslist(data:any) {
  //   console.log(data);
  //   console.log('Data passed');
  // }
}
