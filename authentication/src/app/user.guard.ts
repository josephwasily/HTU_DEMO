import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private profileService: ProfileService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.profileService.isLoggedInUserRegularProfile$.pipe(
      map((isLoggedIn)=> {
        if(!isLoggedIn){
          this.router.navigate(['/not-authorized']);
          return false;
        }
        else {
          return true;
        }

      })
    );;
  }
  
}
