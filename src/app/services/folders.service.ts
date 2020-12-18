// import { Notes } from './../interfaces/notes';
import { folder } from './../interfaces/folder';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  folderIDKey:number = 0;
  folderslist:folder[] = [
    {
      folderID: 0,
      foldername: "All Notes",
      notes: [],
      Elements: 0,
      CanDelete: false
    }
  ];
  constructor() { }
  addFolder(data:any) {
    this.folderIDKey+=1;
    const newFolder:folder = {
      folderID: this.folderIDKey,
      foldername: data.noteTitle,
      notes: [],
      Elements: 0,
      CanDelete: true
    };
    this.folderslist.push(newFolder);
  }
  addToFolder(noteID:number, folderIds:number[]) {
    folderIds.push(0);
    this.folderslist.forEach(e => {
      if (folderIds.includes(e.folderID)) {
        e.notes.push(noteID);
        e.Elements += 1;
      }
    });
  }
  getFolders() {
    return this.folderslist;
  }
  openFolder(folderID:number) {
    let notes:number[] = [];
    this.folderslist.forEach(e => {
      if (e.folderID == folderID) {
        notes = e.notes;
      }
    });
    return notes;
  }
  removeFromFolder(noteid:number) {
    for (let index = 0; index < this.folderslist.length; index++) {
      const element = this.folderslist[index];
      if (element.notes.includes(noteid)) {
        let i = element.notes.indexOf(noteid);
        this.folderslist[index].notes.splice(i, 1);
      }
    }
  }
  deleteFolder(id:number) {
    for (let index = 0; index < this.folderslist.length; index++) {
      const element = this.folderslist[index];
      if (element.folderID == id && element.CanDelete) {
        this.folderslist.splice(index, 1);
        return;
      }
    }
  }
}
