import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path :'', component:MainlayoutComponent, children: [
    {path:'',component:NoteslistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
