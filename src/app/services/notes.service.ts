import { Notes } from './../interfaces/notes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  noteslist:Notes[]=[];
  noteIndex:number=0;
  constructor() { }
  getNotes() {
    return this.noteslist;
  }
  public updateNoteslist(data:any) {
    const newNote: Notes = { id: this.noteIndex, title: data.noteTitle, note: data.note };
    this.noteslist.push(newNote);
    this.noteIndex++;
    console.log(this.noteslist);
    console.log(this.noteIndex);
  }
}
