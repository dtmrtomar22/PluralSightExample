export interface IProduct{
      ProductId:number;
      ProductName:string;
      Price:number;
      IntroductionDate:string;
      description:string,
      CategoryId:number;
      starRating:number;
      Url:string;    
}

export class Product implements IProduct{    
    constructor(
      public ProductId:number,
      public ProductName:string,
      public Price:number,
      public IntroductionDate:string,
      public description:string,
      public CategoryId:number,
      public starRating:number,
      public Url:string 
    ) {    
        
    }
    calculateDiscount(percent:number):number{
        return this.Price - ((this.Price * percent)/100);
    }
}