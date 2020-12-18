import { FoldersComponent } from './folders/folders.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component'
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path :'', component:MainlayoutComponent, children: [
    {path:'',component:NoteslistComponent},
    {path:'add', component:DetailpageComponent},
    {path:'edit', component:DetailpageComponent},
    {path:'show-notes', component:NoteslistComponent},
    {path:'favourites',component:NoteslistComponent},
    {path:'recently-deleted',component:NoteslistComponent},
    {path:'foldernew', component:DetailpageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
