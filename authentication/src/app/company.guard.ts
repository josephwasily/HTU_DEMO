import { CompanyService } from './company.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {
  constructor(private commpanyService: CompanyService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.commpanyService.isLoggedInUserCompany$.pipe(
      map((isLoggedIn)=> {
        if(!isLoggedIn){
          this.router.navigate(['/not-authorized']);
          return false;
        }
        else {
          return true;
        }

      })
    );
  }
  
}
