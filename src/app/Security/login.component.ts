import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:AppUser = new AppUser();
  securityObject:AppUserAuth = null;
  returnUrl : string = null;
  
  constructor(private securityservice :  SecurityService,
      private route : ActivatedRoute,
      private router : Router) {}

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    }

    login(){          
    this.securityservice.login(this.user).subscribe(
      resp => {this.securityObject = resp;                
      if(this.returnUrl){                 
        this.router.navigateByUrl(this.returnUrl);
      }
      else{
        this.router.navigateByUrl("/products");
      }
      },
      ()=>{this.securityObject = new AppUserAuth();}
    );
  }
 

}
