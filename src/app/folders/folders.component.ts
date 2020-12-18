import { FoldersService } from './../services/folders.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {
  @Input("id") id: number;
  @Input("title") title: string;

  constructor(private _foldersService:FoldersService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addFolder(data:any) {

  }
  deleteFolder(id:number) {
    this._foldersService.deleteFolder(id);
    this.router.navigateByUrl('/');
  }

}
