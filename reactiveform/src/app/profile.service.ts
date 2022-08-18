import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id: number = 2; 
  profiles : Profile[] = [
    {
      id: 1,
      firstName: 'ahmad',
      lastName: 'qaisi',
      address: {
        city: 'salt',
        state: 'jordan'
      }
    }
  ]

  getProfiles(): Observable<Profile>{
      return from(this.profiles);
  }
  addProfile(profile: Profile){
    profile.id = this.id+1;
    this.profiles.push(profile);
  }
  removeProfile(id: number){
    console.log(id);
    console.log(this.profiles, 'array before removing element');
    this.profiles = this.profiles.filter((value)=> {
      value.id != id;
    });
    console.log(this.profiles,'from service');  
  }
  updateProfile(profile: Profile){
      const indexOfProfile = this.profiles.findIndex((data)=> data.id == profile.id);
      this.profiles[indexOfProfile] = profile;
  }

  getProfile(id: number){
    return this.profiles.filter((data)=> data.id == id)[0];
  }
  constructor() { }
}

export interface Profile {
  id?: number,
  firstName: string, 
  lastName: string, 
  address : {
    city: string, 
    state: string
  }
}
