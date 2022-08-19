import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profile, ProfileService } from '../profile.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  profiles:  MatTableDataSource<Profile> = new  MatTableDataSource<Profile>([]);
  displayedColumns= ["firstName", "lastName", "actions"];
  constructor(private profileService: ProfileService, private router: Router) {
    // this.profileService.getProfiles().subscribe((data)=> {
    //     this.profiles.data.push(data);
    // });
    this.profileService.getAll().subscribe((data)=> {
      this.profiles.data = data;
    });
   }

  ngOnInit(): void {
  }
  createNewProfile(){
    this.router.navigate(['/profile/create']);
  }
  deleteProfile(id: string){
    // this.profileService.removeProfile(id);
    // console.log(this.profiles.data);
    // this.profiles.data = [];
    // this.profileService.getProfiles().subscribe((data)=> {
    //   this.profiles.data.push(data);
  // });
    this.profileService.delete(id).then(()=> {
      alert('data was deleted successfully');
    });
  }

}
