import { folder } from './../../interfaces/folder';
import { FoldersService } from './../../services/folders.service';
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
  selectedFolderIds:number[] = []
  noteslist:Notes[]=[];
  foldersList:folder[]=[];
  noteTitle:string="";
  noteT:string="";
  nId:number = -1;
  folderNotesflag:boolean;
  constructor(private _notesService:NotesService, private _foldersService:FoldersService, private router: Router) {
    this.selectedFolderIds = [];
    if (this.router.url.includes('edit') || this.router.url.includes('add')) this.folderNotesflag = true;
    else this.folderNotesflag = false;
    if (this.folderNotesflag) {
      const foldersList:folder[] = this._foldersService.getFolders();
      foldersList.forEach(e => {
        // if (e.folderID != 0) this.foldersList.push(e);
        this.foldersList.push(e)
      });
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
  }

  ngOnInit(): void {
  }

  addNote(data:any) {
    if (this.folderNotesflag) {
      if (data.noteTitle == '') alert('Note title must not be empty.');
      else {
        let noteID = this._notesService.updateNoteslist(data);
        this._foldersService.addToFolder(noteID, this.selectedFolderIds);
        this._notesService.deleteNote(this.nId);
        this.router.navigateByUrl('/');
      }
    } else {
      if (data.noteTitle == '') alert('Folder title must not be empty.');
      else {
        this._foldersService.addFolder(data);
        this.router.navigateByUrl('/');
      }
    }
  }
  updateCheckedOptions(id: number, event: any){
    if (this.selectedFolderIds.includes(id)) {
      const index = this.selectedFolderIds.indexOf(id, 0);
      if (index > -1) {
        this.selectedFolderIds.splice(index, 1);
      }
    } else this.selectedFolderIds.push(id);
    console.log('option', this.selectedFolderIds );
  }

}
