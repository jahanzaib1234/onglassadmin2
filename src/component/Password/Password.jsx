import React from 'react'
import './Password.css'

export const Loginpage = () => {
  return (
    <div className="main_div_reset">

<div id='first_div'>
         
         <img src="./images/login.png" alt=""/>
         <span id='welcome'>Welcome to Antzwave</span>
   </div>
    
    
      <div className="second_div">
      <span id='heading1'>Password</span>
      <form action="">
        <div id='user_name_div'>
        {/* <img src='./images/user.jpeg'/> */}
        <input type="password" id='user_name' placeholder='New Password' />
        </div>
        <div id='password_div'>

        {/* <img src='./images/lock.jpeg'/> */}

        <input type="password" id='password'  placeholder='Confirm Password'/>
        </div>
       

        <div className="button_div">
          <input type="submit" id="button" value="LOGIN"/>
          {/* <label id='error'>Error Message Wait </label> */}
        </div>
      </form>
      
      <div className="bottom">
        <img src='./images/logo.svg' alt='error iameg'/>

        
      </div>

      </div>
    </div>
  )
}

export default Loginpage