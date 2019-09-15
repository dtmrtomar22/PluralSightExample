export class AppUserAuth{
    userName : string="";
    bearerToken: string="";
    access_token:string="";
    isAuthenticated:boolean= false;
    canAccessProducts : boolean = false;
    canAccessCategory: boolean = false;
    canAddProducts : boolean=false;
    canSaveProduct: boolean= false;
    canAddCategory: boolean= false;    
}