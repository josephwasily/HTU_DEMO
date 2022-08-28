import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseError } from '@angular/fire/app';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private authService:AuthService,
    private router: Router,
    private toast: HotToastService) { }
  loginForm = this.fb.group({
    email: this.fb.control('',[Validators.required, Validators.email]),
    password: this.fb.control('',[Validators.required, Validators.minLength(8)])
  })
  formStatus?: string;
  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  submit(){
     this.authService.signIn(this.loginForm.controls.email.value + '',
      this.loginForm.controls.password.value + '')
      .pipe(
        this.toast.observe({
          loading: 'Signing in ...',
          success: 'Welcome to Application',
          error:(error)=> 'This error Happened: '+error
        })
      )
      .subscribe({
       next:  (data)=> {
        //TODO: add check here on user type 
        
        this.router.navigate(['home']);
      }, 
      error: (error: FirebaseError)=> {
          this.formStatus = error.message;
      }
      });

    //login in firebase 
        // upon success => go to home
        // else alert 
  }

}
