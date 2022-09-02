import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivitiesService, Activity } from '../activity.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  constructor(public activitiesService: ActivitiesService, public authService: AuthService) { }
  activities?: Activity[]
  // companies: Company[]
  ngOnInit(): void {

    this.authService.userState$.subscribe((userCredential)=> {
      this.activitiesService.currentUserActvities$?.subscribe((data)=> {
        console.log(data, 'before filter');
        this.activities = data?.filter((value)=> {
          return value.companyId == userCredential?.uid;
        });
        console.log(this.activities,'after filter');
      })
    })
  }


}
