import{AppUserAuth} from "./app-user-auth";

export const LOGIN_MOCK : AppUserAuth[]=[{
    userName        : "deepak",
    bearerToken     : "abcd345789dhsjhdjs434",    
    isAuthenticated  : true,
    canAccessCategory: true,
    canAccessProduct : true,
    canAddProducts   : true,    
    canSaveProduct  : true,
    canAddCategory  : true  
},
{
    userName        : "Brijesh",
    bearerToken     : "s9802738dghdghd989dj",    
    isAuthenticated  : true,
    canAccessProduct : false,
    canAccessCategory: false,
    canAddProducts   : false,    
    canSaveProduct  : true,
    canAddCategory  : true  
}
]