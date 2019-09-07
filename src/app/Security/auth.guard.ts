import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private securityservice : SecurityService,
      private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      let claimType:string = route.data["claimType"];
      if (this.securityservice.securityObject.isAuthenticated &&
        this.securityservice.securityObject[claimType]){
          return true;
        }
       else{
         this.router.navigate(['login'],
         {queryParams : {retunUrl:state.url}}
         )
       }

      
    } 
} 
