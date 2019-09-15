import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from './Security/app-user-auth';
import { SecurityService } from './Security/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  securityObject : AppUserAuth=null;
  pageTitle:string = 'Acme Product Management';
  
  constructor(private securityservice:SecurityService) {   
    
    this.securityObject = securityservice.securityObject;
    alert("ngonint" +JSON.stringify(this.securityservice.securityObject));    
  }
  
  logout():void{
    this.securityservice.logout();
  }
 
}
