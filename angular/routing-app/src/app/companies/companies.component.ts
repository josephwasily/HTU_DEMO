import { Component, OnInit } from '@angular/core';
import { CompaniesServiceService } from '../services/companies-service.service';
import { Company } from '../services/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  constructor(
    private companiesService: CompaniesServiceService
  ) { 
    this.companies = this.companiesService.getCompanies();
  }

  ngOnInit(): void {
  }

}
