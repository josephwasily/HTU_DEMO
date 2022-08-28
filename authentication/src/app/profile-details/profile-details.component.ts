import { switchMap } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PictureUploadService } from '../picture-upload.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  
  constructor(public authService: AuthService, private uploadService: PictureUploadService,
    private fb: FormBuilder, private profileService: ProfileService) { }
  profileDetailsForm = this.fb.group({
   fullName: this.fb.control(''),
   age: this.fb.control(0),
   
  })
  ngOnInit(): void {
     this.profileService.userState$?.subscribe((profile)=> {
      if(profile){
        this.profileDetailsForm.setValue({
          fullName: profile.fullName+"",
          age: profile.age ?? 0
        });
      }
     })
  }
  submit(event : Event){
        const input = <HTMLInputElement> event.target;
        const obj = input?.files?.[0] as File;
        this.uploadService.uploadImage(obj).subscribe();
  }
  saveForm(){
    this.authService.userState$.pipe(
      switchMap(user=> this.profileService.update({
        uid: user?.uid,
        age: this.profileDetailsForm.value.age,
        email: user?.email+'',
        fullName: this.profileDetailsForm.value.fullName+''
      }))
    ).subscribe(()=> {
        console.log('update was successfull');
    });
   
  }
}
