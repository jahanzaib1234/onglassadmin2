import React, { useEffect, useState } from 'react';
import Top from './component/Header/Top';
import './App.css';
 import Sidebar from './component/Sidebar/Sidebar';
// import Account from './component/Account/Account';
import Loginpage from './component/Login/Loginpage';
import Password from './component/Password/Password';
import Setting from './component/Setting/Setting';
 import Dashboar from './component/Dashboard/Dashboar';
 import Form from './component/DeviceForm/Form';
import Ownership from './component/Ownership/Ownership';
import Restriction from './component/Restriction/Restriction';
import Register from './component/Register/Register';
import Email from './component/Email/Email';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { AuthProvider } from './AuthContext';
import PublicRoute from './PublicRoute';
function App() {
  const [currentUser,setCurrentUser] = useState()
  useEffect(()=>{
      onAuthStateChanged(auth,user=>{
        setCurrentUser(user)
      })
  },[])
  return (
    <AuthProvider>
    <div  className='App'>
    
      <div className='AppGlass'>
         
         
      { 
        currentUser?<>
           {/* <Email/>  */}
          <Top/>
          <Sidebar/>
        </>:null
    }
        
      <Switch>
      <Route  excat path='/login' component={Loginpage} />
      <Route  excat path='/resetpass' component={Email} />
      <PrivateRoute  excat path='/dashboard' component={Dashboar}/>
      <PrivateRoute  excat path='/adddevice' component={Form}/>
      <PrivateRoute excat path='/ownership' component={Ownership}/>
      <PrivateRoute excat path='/restriction' component={Restriction}/>
      <PrivateRoute excat path='/settings' component={Setting}/>
      <PrivateRoute  excat path='/' component={Dashboar}/>
      </Switch> 

      {/* <Ownership/>
      
      {/* <Account/> */}
      {/* <Setting/> */}

    {/* <Form/> */}
{/* <Dashboar/> */}
      
      
      </div>
     </div>
     </AuthProvider>
  );
}

export default App;
