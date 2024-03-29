import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoldersComponent } from './folders/folders.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    MainlayoutComponent,
    NotecardComponent,
    DetailpageComponent,
    FoldersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
