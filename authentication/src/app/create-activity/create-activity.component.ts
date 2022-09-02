import { take } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { ActivitiesService } from './../activity.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    name: this.fb.control(''),
    description: this.fb.control(''),
    range: this.fb.group({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    })
  })
  constructor(private fb: FormBuilder, private activityService: ActivitiesService,
    private auth: AuthService, private router: Router) { }
  ngOnDestroy(): void {
      
  }

  ngOnInit(): void {
  }

  submit(){
    //get current authenticated user id 
    //create activity for that userid
    //navigate all activities page
    let subscriber = this.auth.userState$.pipe(take(1)).subscribe((userCredentials)=> {
      if(userCredentials){
        this.activityService.create({
          name: this.form.value.name+'',
          companyId: userCredentials.uid,
          description: this.form.value.description+'',
          range: {...this.form.value.range}
        }).subscribe(()=> {
          //navigate to all activities page 
          console.log('activity was created successfully');
          this.router.navigate(['company/activities']);
        })
      }
    });

  

  }
}
