import React from 'react'
import './Register.css'
export const Register = () => {
  return (
    <div className="main_div_register">
    <div id='first_div'>
         
          <img src="./images/login.png" alt=""/>
          <span id='welcome'>Welcome to Antzwave</span>
    </div>
      
      {/* <img src='./images/login.png'/> */}
      <div className="second_div">
      <span id='heading1'>Registeration</span>
       
      <form action="">
     
      {/* First Name  */}

        <label id='fname'>First Name:</label>
        <input type="text" id='finput' placeholder='First Name'  required="required" />
        
         {/* Second  Name  */}

         <label id='lname'>Last Name:</label>
        <input type="text" id='linput' placeholder='Last Name'   required="required" />

          {/* Email Search */}

        <label id='ename'>Email:</label>
        <input type="email" id='einput' placeholder='Email'   required="required" />


          {/* password Field  first part */}

        <label id='pname'>Password:</label>
        <input type="password" id='pinput' placeholder='New Password'  required="required"/>
 
         {/* Password Field Second Part */}

        <label id='cname'>Confirm Password:</label>
        <input type="password" id='cinput' placeholder='Confirm Password'  required="required" />


       
        

        <div className="button_div">


          <input type="submit" id="button" value="Register"/>
          
          
        </div>
        </form>
        <div id='image_div'>
        <img src="./images/logo.svg" alt=""/>
        </div> 
        
      
    
        <div id='lan_div'>

        <span id='ch'>Change Language  </span>

        <select id='drop'>
<option value="English"></option>
<option value="Spansih"></option>
</select>
</div>
        

        
        
      
      </div>
    </div>
  )
}

export default Register