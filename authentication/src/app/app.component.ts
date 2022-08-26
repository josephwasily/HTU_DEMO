import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, public authService: AuthService){

  }
  title = 'authentication';

  login(){
    this.router.navigate(['login']);
  }
  logout(){
    this.authService.signOut().subscribe(()=> {
      this.router.navigate(['']);
    });
  }
}

