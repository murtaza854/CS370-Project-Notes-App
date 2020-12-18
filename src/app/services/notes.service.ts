import { Notes } from './../interfaces/notes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // noteslist:Notes[]=[ { id: 0, title: "YOUR MOM", note: "dEATH NOTE", favourite: false, deleted: false }];
  noteslist:Notes[]=[];
  noteIndex:number=0;
  selectedNote:number=-1;
  constructor() { }
  getNotes() {
    var noteslist:Notes[]=[];
    this.noteslist.forEach(e => {
      if (e.deleted == false) noteslist.push(e);
    });
    return noteslist;
  }
  recentDelete() {
    var noteslist:Notes[]=[];
    this.noteslist.forEach(e => {
      if (e.deleted == true) noteslist.push(e);
    });
    return noteslist;
  }
  deleteNote(id:number) {
    var flag:boolean = false;
    this.noteslist.forEach(e => {
      if (e.id == id && e.deleted == false) {
        e.deleted = true;
      } else if (e.id == id && e.deleted == true) {
        flag = true;
      }
    });
    if (flag != false) {
      for (let index = 0; index < this.noteslist.length; index++) {
        const element = this.noteslist[index];
        if (element.id == id) {
          this.noteslist.splice(index, 1);
          return;
        }
      }
    }
  }
  public updateNoteslist(data:any) {
    const newNote: Notes = {
      id: this.noteIndex,
      title: data.noteTitle,
      note: data.note,
      favourite: false,
      deleted: false
    };
    this.noteslist.push(newNote);
    this.noteIndex++;
    return newNote.id;
  }
  openNote(id:number) {
    this.selectedNote = id;
  }
  getFavourites() {
    var noteslist:Notes[]=[];
    this.noteslist.forEach(e => {
      if (e.favourite) noteslist.push(e);
    });
    return noteslist;
  }
  markFavourite(id:number) {
    this.noteslist.forEach(e => {
      if (e.id == id) e.favourite = true;
    });
    return this.noteslist;
  }
}
