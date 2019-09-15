import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable()
export class AuthGuard implements CanActivate  {
  constructor(private securityservice : SecurityService,
      private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      let claimType:string = route.data["claimType"];
      // alert("Auth Gaurd "+JSON.stringify(this.securityservice.securityObject));
      // alert(claimType);
      // if (this.securityservice.securityObject.isAuthenticated &&
      //   this.securityservice.securityObject[claimType]){
      //     alert("auth gaurd true");
      //     return true;
      //   }
      //  else{
      //    this.router.navigate(['Login'],
      //    {queryParams : {returnUrl:state.url}}
      //    )
      //  }
      if(localStorage.getItem("bearerToken")){
        return true;
      }
      else
      {
        this.router.navigate(['Login'],
         {queryParams : {returnUrl:state.url}}
         )
      }
      
    } 
} 
