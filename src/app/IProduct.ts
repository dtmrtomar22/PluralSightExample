export interface IProduct{
      productid:number;
      productName:string;
      productPrice:number;
      releaseDate:string;
      description:string;
      starRating:number;
      imageURL:string;    
}

export class Product implements IProduct{    
    constructor(
      public productid:number,
      public productName:string,
      public productPrice:number,
      public releaseDate:string,
      public description:string,
      public starRating:number,
      public imageURL:string 
    ) {    
        
    }
    calculateDiscount(percent:number):number{
        return this.productPrice - ((this.productPrice * percent)/100);
    }
}