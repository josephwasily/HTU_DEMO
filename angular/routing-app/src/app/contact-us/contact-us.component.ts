import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.contact);
    //route/navigate to the home page 
    this.router.navigate(['/company',2],  {
      queryParams: {
        show: 'hello',
        contact: this.contact
      }
    });

  }
}
