import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})

export class CompaniesServiceService {
  private companies: Company[] = [
    { 
      id: 1, 
      name: 'B12 For Digital Services',
     founderName: 'Alaa Bakhit', 
     sector: 'Ed Tech',
     yearOfEstablishment: 2016, 
    numberOfEmployees: 15,
  description: 'Best EdTech tool in Jordan'},
    {id: 2,name: 'Zain', founderName: 'No Idea',  sector: 'Telecommunication',
    yearOfEstablishment: 1995, 
    numberOfEmployees: 1233,
  description: 'Best Coverage in Jordan'
  },
    {id: 3,name: 'Tamatem', founderName: 'Ahmad Samir',  sector: 'Gaming Technology',
    yearOfEstablishment: 2016, 
    numberOfEmployees: 100},
  ];
  constructor() { 
  }
  getCompanies(): Company[]{
      return this.companies;
  }
}
