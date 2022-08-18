import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  user!: User;
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute
    ) { 


  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route);
    console.log(id);  
    const url = 'https://jsonplaceholder.typicode.com/users/'+id;

    this.httpClient.get<User>(url)
    .subscribe((data)=> {
      this.user = data;
    });

  }

}


export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}

export interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name:        string;
  catchPhrase: string;
  bs:          string;
}
