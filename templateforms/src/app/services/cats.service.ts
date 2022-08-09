import { Injectable } from '@angular/core';


export interface CatForm {
  bffGender: string,
  catsBffName: string,
  catsEmail: string,
  catsName: string,
  favoriteFood: boolean,
  name: string,
  selfie:string,
  story: string
  };
  
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
