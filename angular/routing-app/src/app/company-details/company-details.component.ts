import { CompaniesServiceService } from './../services/companies-service.service';
import { Company } from './../services/company';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company;
  show: string = '';
  constructor(companiesService: CompaniesServiceService,
    private route: ActivatedRoute
    ) {
      this.route
      .queryParamMap
      .pipe(map(params => params.get('show') || ''))
      .subscribe((val)=> {
        this.show = val;
        console.log(val);
      });

    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.company = companiesService.getCompanies().filter((value,index)=> {
        return value.id == id;
    })[0];
   }

  ngOnInit(): void {
  }

}
