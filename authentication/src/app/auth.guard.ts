import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take, from, filter } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
              return true;
            }
            else {
              this.router.navigate(['login']);
              return false;
            }
        })
      );
  }
  
}
