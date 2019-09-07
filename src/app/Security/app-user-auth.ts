export class AppUserAuth{
    userName : string="";
    bearerToken: string="";
    isAuthenticated:boolean= false;
    canAccessProduct : boolean = false;
    canAccessCategory: boolean = false;
    canAddProducts : boolean=false;
    canSaveProduct: boolean= false;
    canAddCategory: boolean= false;    
}