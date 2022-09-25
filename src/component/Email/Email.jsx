import React from 'react'
import './Email.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../AuthContext'
import { useState } from 'react'

export const Loginpage = ({history}) => {

  const [email_,setEmail_] = useState('')
  const [error,setError] = useState('')
  const {resetpassword,currentUser}=  useAuth()
  
  
  function handelresetpass(e){
    e.preventDefault()

    setError("Check your Email to reset password")
       const reset = resetpassword(email_)
       
      .catch(e=>{
        let errorcode = e.code.split("auth/")[1];
        console.log(errorcode)
         setError(errorcode)
        if (errorcode === 'user-not-found'){
          
          setError("User not found")
        }
       
        else if(errorcode === 'invalid-email'){
          setError("Invalid Email")
        }
        
        
    })
  }

  return (
    <div className="main_div_email">
      { 
        currentUser? history.push('/Dashboard'):null
    }
<div id='first_div'>
         
         <img src="./images/login.png" alt=""/>
         <span id='welcome'>Welcome to Antzwave</span>
   </div>
    
    
      <div className="second_div">
      <span id='heading1'>Reset Your Password</span>
      <form action="">
        <div id='user_name_div'>
        {/* <img src='./images/user.jpeg'/> */}
        
        <label id='verify'>Enter Your User Account's Verified Email Address and we will send you a password Reset Link.</label>

        
             <input type="email" id='user_name' placeholder='Email' onChange={(event)=>{
             setError("")
             setEmail_(event.target.value) 
          }} />
        </div>
      
        <div className="selection_div" >
        <NavLink to="/login"><a>Sign in ?</a></NavLink> 
          
        </div>

        <div className="button_div">
          <input type="submit" id="button" value="Confirm" onClick={handelresetpass}/>
         
        </div>
      </form>
       <div id="error_div">
        {error}
       </div>
      <div className="bottom">
        <img src='./images/logo.svg'/>

       
      </div>

      </div>
    </div>
  )
}

export default Loginpage