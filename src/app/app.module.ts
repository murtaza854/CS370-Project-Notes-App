import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NotecardComponent } from './notecard/notecard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    MainlayoutComponent,
    NotecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
