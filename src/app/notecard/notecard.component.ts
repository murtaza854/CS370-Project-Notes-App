import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @Input("title") title: string;
  @Input("body") body: string ="idiot idiot idiot idi otidioti diotidiotidiotidiotidio tidio tidiotidiotidiotidiot idiotidi otidiotidiotidiotidiotidiot";
  // @ViewChild('truncator')
  // truncator!: ElementRef<HTMLElement>;
  // @ViewChild('bodyText')
  // bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

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

}
