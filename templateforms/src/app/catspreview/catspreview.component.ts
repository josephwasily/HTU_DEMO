import { CatForm, CatsService } from './../services/cats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catspreview',
  templateUrl: './catspreview.component.html',
  styleUrls: ['./catspreview.component.css']
})
export class CatspreviewComponent implements OnInit {
  cats: CatForm [] = [];
  constructor(catsService: CatsService) {
      this.cats= catsService.getAllCats();

   }

  ngOnInit(): void {
  }

}
