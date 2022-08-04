import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  data:any[] = [];
  constructor() { }

  
  updateElement(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
    this.data.push(value);
}

getElement(key: string): any{
    if(localStorage.getItem(key)!= null){
        return JSON.parse(localStorage.getItem(key) as string);
    }
}
}
