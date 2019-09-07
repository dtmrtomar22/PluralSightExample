import { Injectable } from '@angular/core';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { LOGIN_MOCK } from './Login-mock';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = "";
const httpOptions ={
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject : AppUserAuth = new AppUserAuth();  
  constructor(private http: HttpClient) { }
  login(entity:AppUser):Observable<AppUserAuth>{
    this.resetSecurityObject();
    // Object.assign(this.securityObject,
    //   LOGIN_MOCK.find(user=>user.userName.toLowerCase()===
    //                   entity.userName.toLowerCase()))
    //   if(this.securityObject.userName !==""){
    //     localStorage.setItem("bearerToken", this.securityObject.bearerToken);
    //   }

      return this.http.post<AppUserAuth>(API_URL+"login",entity,httpOptions).pipe(
        tap(resp=>{Object.assign(this.securityObject,resp); 
        localStorage.setItem("bearerToken",this.securityObject.bearerToken);
        })
      )
      return of<AppUserAuth>(this.securityObject);
  }
  logout():void{
    this.resetSecurityObject();
  }
  resetSecurityObject():void{
    this.securityObject.userName ="";
    this.securityObject.bearerToken ="";
    this.securityObject.canAccessProduct = false,
    this.securityObject.canAccessCategory = false,
    this.securityObject.canAddCategory= false,
    this.securityObject.canAddProducts = false,
    this.securityObject.canSaveProduct = false,
    this.securityObject.isAuthenticated = false;
    localStorage.removeItem( "bearerToken");
  }
}
