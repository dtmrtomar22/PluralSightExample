import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  pageTitle:string = "product list";
  products:any[] = [
    {
      "productid": 1,
      "productName" : "ABC",
      "productPrice" : 200,
      "releaseDate" : "29/09/2019",
      "description" : "testing item",
      "starRating"  : 3.2,
      "imageURL" : ""
    },
    {
      "productid": 2,
      "productName" : "xyz",
      "productPrice" : 400,
      "releaseDate" : "30/09/2019",
      "description" : "testing item",
      "starRating"  : 4.2,
      "imageURL" : ""
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
