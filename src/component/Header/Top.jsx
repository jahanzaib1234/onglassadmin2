import React from 'react';
import './style.css';
import { useAuth } from '../../AuthContext';

export default function Top() {
  const {logout} = useAuth()
  function handelLogout(){
    logout()
  }
  return (
    // logo div
   
   <div className='navbar'>
        
        <img src="./images/logo.svg" alt=""/>


    
           <div id='name'>
            Hi, Admin
           </div>
           <div id="picture">
           {<img src="./images/profile.png" alt="profile pic"/>}

             </div>
           <div id='Dropdownn'>
               <img src='./images/drop.png' alt='drop down'/>
               <ul>
                <li onClick={handelLogout}>
                  Logout
                </li>
               </ul>
           </div>
               
           

   
        



     </div>
        
  )
}
