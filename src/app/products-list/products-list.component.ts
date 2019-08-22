import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../IProduct';
import { ProductSerice } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  pageTitle:string = "product list";
  imageWidth:number = 50;
  imageMargin:number =2;
  showImage:boolean = false;
  //listFilter:string = 'Hammer';
  filteredProduct : IProduct[];
  _listFilter:string;
  errMessage :string;
  get listFilter():string{    
    return this._listFilter;
  }
  set listFilter(value:string){    
    this._listFilter = value;
    this.filteredProduct = this.listFilter?this.performFilter(this.listFilter):this.products;
  }
  products:IProduct[] = [];
  toggelImage():void{
    this.showImage = !this.showImage;
  }
  constructor(private productService :ProductSerice) { 
    
    //this.listFilter = "Hammer";
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    console.log(filterBy);
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  onRatingClicked(message:string) : void{
    this.pageTitle = 'Product List: ' + message;
  }
  ngOnInit() { 
    // this.products = this.productService.getProducts();
    // this.filteredProduct = this.products;
    this.productService.getProducts().subscribe({
      next: products => {this.products = products
      this.filteredProduct = this.products;
    },
      error: err=> this.errMessage = err,
      
    });
  }

}
