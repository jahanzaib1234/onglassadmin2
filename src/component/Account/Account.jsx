import React from 'react'
import './Account.css';

export default function Account() {
  return (
    <div className='main'>
      <ul>
 <li>
<div id='avatar'>
<img src="./images/Male.png" alt="Load!!" id='why'/>
</div>
<h3>My profile</h3>
</li>
<li>
<div id='avatar'>
<img src="./images/setting.png" alt="Load!!" id='why'/>
</div>

<h3>Account</h3>
</li>
 </ul>  


{/* Account Setting Start for password */}

 <div id='account'>
 <form>
 <h2>Account</h2>
  <div id="group6">
    <label for="exampleInputname" id='First'>Login ID</label>
    <input type="type"  id='email' placeholder='contact@antzwave.com'/>
     </div>
 
     
     <div id="group5">
    <input type="submit"  id='submit' value="Change Login ID"/>
     </div>



</form>
</div>


 {/* Account Setting Start for password */}







<div id='profile'>
 <form>
 <h2>Password</h2>
  <div id="group1">
    <label for="exampleInputname" id='First'>Old password</label>
    <input type="password"  id='email' placeholder='Old Password'/>
     </div>
 

     <div id="group2">
    <label for="exampleInputname" id='Second'>New password</label>
    <input type="password"  id='last' placeholder='New password'/>
     </div>


     <div id="group3">
    <label for="exampleInputname" id='Third'>Repeat password</label>
    <input type="password"  id='last' placeholder='Confirm new password '/>
     </div>

     <div id="group4">
    <input type="Submit"  id='submit' value="Change Password"/>
     </div>



</form>
</div>

      
    </div>
  )
}
