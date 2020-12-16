import { Notes } from './../interfaces/notes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  noteslist:Notes[]=[ { id: 0, title: "YOUR MOM", note: "dEATH NOTE" }];
  noteIndex:number=0;
  selectedNote:number=-1;
  constructor() { }
  getNotes() {
    return this.noteslist;
  }
  deleteNote(id:number) {
    for (let index = 0; index < this.noteslist.length; index++) {
      const element = this.noteslist[index];
      if (element.id == id) {
        this.noteslist.splice(index, 1);
        return;
      }
    }
  }
  public updateNoteslist(data:any) {
    const newNote: Notes = { id: this.noteIndex, title: data.noteTitle, note: data.note };
    this.noteslist.push(newNote);
    this.noteIndex++;
  }
  openNote(id:number) {
    this.selectedNote = id;
  }
}
