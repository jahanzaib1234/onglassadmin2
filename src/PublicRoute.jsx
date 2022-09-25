import React ,{ useEffect, useState } from "react";
import { Route,Redirect } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useAuth } from "./AuthContext";

const PublicRoute = ({children,...rest})=>{
    const {currentUser} = useAuth()
    return (<Route {...rest} render={()=>currentUser?(<Redirect to={'/login'}/>):(<Redirect to={'/'}/>)}/>)

}

export default PublicRoute;