import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import{catchError,tap} from 'rxjs/operators';


@Injectable({
    providedIn:"root"
})
export class ProductSerice{
  httpUrl:string ='api/products/products.json';
  constructor(private http:HttpClient){

  }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.httpUrl).pipe(
      tap(data=>console.log('All: ' + JSON.stringify(data))),catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
      let errMessage= '';
      if(err.error instanceof ErrorEvent){
        errMessage = 'an error  occured' + err.error.message; 
      }
      else{
        errMessage = 'server returned code ' + err.status + ' error message is ' + err.message;
      }
      return throwError(errMessage);
  }
    // getProducts():IProduct[]{
    //     return [
    //         {
    //           "productid": 1,
    //           "productName" : "Hammer",
    //           "productPrice" : 200,
    //           "releaseDate" : "29/09/2019",
    //           "description" : "testing item",
    //           "starRating"  : 3.2,
    //           "imageURL" : "assets/hammer-png-icon-15.png"
    //         },
    //         {
    //           "productid": 2,
    //           "productName" : "Drill Machine",
    //           "productPrice" : 400,
    //           "releaseDate" : "30/09/2019",
    //           "description" : "testing item",
    //           "starRating"  : 4.2,
    //           "imageURL" : "assets/71v8JThSIHL._SL1500_.jpg"
    //         }
    //       ];
    // }

}