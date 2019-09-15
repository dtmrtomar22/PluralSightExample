import { Injectable } from '@angular/core';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { LOGIN_MOCK } from './Login-mock';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = "http://localhost:34362/";
const httpOptions ={
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'grant_type':'password',
    'No-Auth':'True'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject : AppUserAuth = new AppUserAuth();  
  userclaim:string= "";
  constructor(private http: HttpClient) { }
  login(entity:AppUser):Observable<AppUserAuth>{
    this.resetSecurityObject();
    // Object.assign(this.securityObject,
    //   LOGIN_MOCK.find(user=>user.userName.toLowerCase()===
    //                   entity.userName.toLowerCase()))
    //   if(this.securityObject.userName !==""){
    //     localStorage.setItem("bearerToken", this.securityObject.bearerToken);
    //   }      
      var userData = "username=" + entity.userName + "&password=" + entity.password + "&grant_type=password";
      const config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
       return this.http.post<AppUserAuth>(API_URL+"oauth/token",userData,{ headers: config }).pipe(
        tap(resp=>{Object.assign(this.securityObject,resp);        
          alert("alert" +  JSON.stringify(this.securityObject));            
          localStorage.setItem("bearerToken",this.securityObject.access_token);     
          //alert("alert" +  localStorage.getItem("bearerToken"));
        }));
      
      return of<AppUserAuth>(this.securityObject);
  }
  logout():void{
    this.resetSecurityObject();
  }
  resetSecurityObject():void{
    this.securityObject.userName ="";
    this.securityObject.bearerToken ="";
    this.securityObject.canAccessProducts = false,
    this.securityObject.canAccessCategory = false,
    this.securityObject.canAddCategory= false,
    this.securityObject.canAddProducts = false,
    this.securityObject.canSaveProduct = false,
    this.securityObject.isAuthenticated = false;
    localStorage.removeItem( "bearerToken");
  }
}
