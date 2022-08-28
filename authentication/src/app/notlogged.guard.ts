import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotloggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      return this.authService.userState$
      .pipe(
        take(1),
        map((data)=> {
            if(data){
              // if(!data.emailVerified){
               
              //   this.router.navigate(['pending-verification']);
              //   return false;
              // }
              this.router.navigate(['home']);
              return false;
            }
            else {
              return true;
            }
        })
      );
  }
  
}
