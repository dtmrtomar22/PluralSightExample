import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { convertTospacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.Component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './welcome/pagenotfound.component';

@NgModule({
  declarations: [    
    AppComponent,
    ProductsListComponent,
    StarComponent,
    convertTospacesPipe,
    ProductDetailComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products' , component: ProductsListComponent},
      {path:'products/:id' , component:ProductDetailComponent},
      {path:'welcome' , component:WelcomeComponent},
      {path:'' ,redirectTo : 'welcome' ,pathMatch: 'full'},
      {path:'**' ,component : PagenotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
