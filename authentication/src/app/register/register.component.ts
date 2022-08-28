import { CompanyService } from './../company.service';
import { ProfileService } from './../profile.service';
import { Router } from '@angular/router';
import { FormBuilder, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formType = this.fb.control('');
  registerForm = this.fb.group({
    // displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, this.corporateEmailValidator()]],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {validators: this.passwordMatchingValidator() })
  constructor(private fb: FormBuilder, private authService: AuthService, 
     private router: Router,
     private toast: HotToastService,
     private profileService: ProfileService,
     private companyService: CompanyService
     ) { }

  ngOnInit(): void {
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }
  submit(){
      const formValue = this.registerForm.value;
      this.authService.signUp(formValue.email+'', formValue.password+'')
      .pipe(
          // switchMap((data)=> {
          //   return this.profileService.create({
          //     uid: data.user?.uid + '',
          //     email: data.user?.email +''
          //   });
          // }),
          switchMap((data)=> {

            if(this.formType.value == "user"){
              return this.profileService.create({
                uid: data.user?.uid,
                email: data.user?.email + ''
              })
            }
            else if(this.formType.value == "company") {
                return this.companyService.create({
                  uid: data.user?.uid,
                  email: data.user?.email + ''
                });
            }
            else {
              throw new Error('Type was not selected');
            }
          
          }),
          this.toast.observe({
            loading: 'Registering User ...',
            success: 'Succesfully Registered',
            error:(error)=> 'This error Happened: '+error
          })
      )
      .subscribe({
        next: ()=>{
          if(this.formType.value == "user"){
            this.router.navigate(['']);
          }
          else {
            this.router.navigate(['company']);

          }
      }, 
      error: (error)=> console.log(error)
    }
      );
  }

  passwordMatchingValidator() : ValidatorFn {
      return (control): ValidationErrors | null =>  {
         
        const password = control.get('password')?.value;
        const confirm = control.get('confirmPassword')?.value;

        if(password && confirm 
            && password !== confirm
          ){
            //invalid form input 
            return {
              passwordDontMatch: true
            }
          }
        // validation is valid 
          return null;
      }
  }
  corporateEmailValidator() :ValidatorFn{
    return (control) : ValidationErrors | null => {
        const email = control.value;
        const nonCorporateEmailProviders = ['gmail.com', 'yahoo.com', 'hotmail.com'];

        if(email
          &&  nonCorporateEmailProviders.some((domain)=> {
            return email.includes(domain);
          })){
              return {
                nonCorporateEmail: true
              }
          }
          return null;
    }
  }
  
}
