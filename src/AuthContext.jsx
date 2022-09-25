import React, { useContext, useEffect, useState } from 'react'
import {auth} from './firebase'
import { signInWithEmailAndPassword,signOut,updateEmail,updatePassword,sendPasswordResetEmail} from 'firebase/auth'
const AuthContext =  React.createContext()

export function useAuth(){
  return useContext(AuthContext)
} 

export  function AuthProvider({children}) {
  const [currentUser,SetCurrentUsr]=useState()

  function login(mail_,password_){
    return signInWithEmailAndPassword(auth,mail_,password_)
   }
  function logout(){
    return signOut(auth)
  }
  function updateemail(email_){
    return updateEmail(auth.currentUser,email_)
   
  }
  function updatpassword(password_){
     return updatePassword(auth.currentUser,password_)

  }
  function resetpassword(email_){

       return sendPasswordResetEmail(auth,email_)
  }
   useEffect(()=>{
    const unsubscribe  = auth.onAuthStateChanged(user=>{
            SetCurrentUsr(user)
       console.log(user)
     })
     return  unsubscribe
   },[])

  const  value={
      currentUser,
      login,
      logout,
      updateemail,
      updatpassword,
      resetpassword
  }





  return (
    <AuthContext.Provider value={value}>
    
      {children}
    </AuthContext.Provider>
    
    
    )
}
