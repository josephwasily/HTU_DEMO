import { ProfileService } from './../profile.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  
  }

}
