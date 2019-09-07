import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { IProduct } from '../IProduct';
import { ProductSerice } from '../products-list/product.service';

@Component({
  // selector: 'pm-product-detail', //required if we wanted to nested component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "page detail";
  product:IProduct | undefined;
  errorMessage: string;  
  constructor(private route : ActivatedRoute , 
              private router : Router,
              private productService : ProductSerice) { 

  }

  ngOnInit() {    
    const param= +this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;
      this.pageTitle +=  " : "  + id ;
      this.getProduct(id);
    }
    
    // this.product = {
    //   "productid": id,
    //   "productName" : "Drill Machine",
    //   "productPrice" : 400,
    //   "releaseDate" : "30/09/2019",
    //   "description" : "testing item",
    //   "starRating"  : 4.2,
    //   "imageURL" : "assets/71v8JThSIHL._SL1500_.jpg"
    // }
  }

  getProduct(id: number){

    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error 
    );
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
