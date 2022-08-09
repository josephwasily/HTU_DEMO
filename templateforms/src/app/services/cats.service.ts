import { Injectable } from '@angular/core';


export interface CatForm {
  name:        string;
  catsInfo:    CatsInfo;
  catsBffName: string;
  bffGender:   string;
  story:       string;
}

export interface CatsInfo {
  catsName:  string;
  catsEmail: string;
  selfie:    string;
  Milk:      boolean;
  Biscuits:  boolean;
  Cucumber:  boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  allCats : CatForm[] = [];
  constructor() { }

  add(cat: CatForm){
    this.allCats.push(cat);
  }
  getAllCats() : CatForm[] {
    return this.allCats;
  }
}
