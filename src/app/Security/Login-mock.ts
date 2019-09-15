import{AppUserAuth} from "./app-user-auth";

export const LOGIN_MOCK : AppUserAuth[]=[{
    userName        : "deepak",
    bearerToken     : "abcd345789dhsjhdjs434",    
    access_token    : "",
    isAuthenticated  : true,
    canAccessCategory: true,
    canAccessProducts : true,
    canAddProducts   : true,    
    canSaveProduct  : true,
    canAddCategory  : true  
},
{
    userName        : "Brijesh",
    bearerToken     : "s9802738dghdghd989dj",    
    access_token    : "",
    isAuthenticated  : true,
    canAccessProducts : false,
    canAccessCategory: false,
    canAddProducts   : false,    
    canSaveProduct  : true,
    canAddCategory  : true  
}
]