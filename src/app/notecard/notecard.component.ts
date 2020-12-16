import { MatButtonModule } from '@angular/material/button';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NotesService } from './../services/notes.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @Input("id") id: number;
  @Input("title") title: string;
  @Input("body") body: string;
  // @ViewChild('truncator')
  // truncator!: ElementRef<HTMLElement>;
  // @ViewChild('bodyText')
  // bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2, private _notesService:NotesService) {}

  ngOnInit(): void {
    // let style = window.getComputedStyle(this.bodyText.nativeElement,null);
    // let viewableHeight =parseInt(style.getPropertyValue('Height'),10);
    // if (this.bodyText.nativeElement.scrollHeight >  viewableHeight) {
    //   this.renderer.setStyle(this.truncator.nativeElement,'display','block');
    // }
    // else
    // {

    //   this.renderer.setStyle(this.truncator.nativeElement,'display','none');
    // }
  }
  deleteNote(id:number) {
    this._notesService.deleteNote(id);
  }
}
