import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NotecardComponent } from './notecard/notecard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    MainlayoutComponent,
    NotecardComponent,
    DetailpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
