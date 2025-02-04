import React, { createContext, useState,useContext } from 'react'
export const AuthContext=createContext();
export function AuthProvider({children}){
    const initailAuthUser=localStorage.getItem("Users");
    const [authUser,setAuthUser]=useState(
        initailAuthUser? JSON.parse(initailAuthUser):undefined
    )
    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);