import React ,{useState}from 'react'
 import './Sidebar.css';
 import Dashboard from '../../image/Dashboard.png';
 import Device from '../../image/Device.png';
 import Ownership from '../../image/Ownership.png';
 import Restriction from '../../image/Restriction.png';
 import Seting  from '../../image/Seting .png';
 import { NavLink,Link} from "react-router-dom";
 import { FiMenu } from "react-icons/fi";
 import { CgMenuRightAlt } from "react-icons/cg";
 import i18n from 'i18next'
 import i18next from 'i18next'
 import {useTranslation,initReactI18next} from 'react-i18next'
 import LanguageDetector  from 'i18next-browser-languagedetector'
 import HttpApi from 'i18next-http-backend';
 i18n 
   .use(initReactI18next)
   .use(LanguageDetector)
   .use(HttpApi)
   .init({
    
     fallbackLng:"fr",
     detection:{
       order: [ 'cookie','querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
       caches:['cookie']
     },
     backend: {
       loadPath: 'assets/locales/{{lng}}/translation.json',
     },
     react:{useSuspense:false}
   })




export default function Sidebar() {
    const [show,setShow] = useState(true);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);

 function show_tab_menu(){
    setShow(false)
    setShow2(true)
    setShow3(true)
 }
 function hide_tab_menu(){
    setShow(true)
    setShow2(false)
    setShow3(false)
 }
 const {t} = useTranslation();
  return (

<>   
{
    show?<div className='menu_icon' onClick={show_tab_menu}>
    <FiMenu size={30}/>
    </div>:null
}    
{
    show2?<div className='menu_icon_cross'  onClick={hide_tab_menu}>
    <CgMenuRightAlt size={30}/>
    </div>:null
}

<div className='menu'>                
<NavLink  className='menuitem'  to="/dashboard">

    <div className='lo'>
    
    <img src={Dashboard} alt=""/>
   
    </div>
    <span>{t('menu_1')}</span>
</NavLink >


<NavLink  className='menuitem'  to="/adddevice">

    <div className='lo'>
    
    <img src={Device} alt=""/>
   
    </div>
    <span>{t('menu_2')}</span>
    </NavLink >

    

    <NavLink  className='menuitem'  to="/ownership">

    <div className='lo'>
    
    <img src={Ownership} alt=""/>
   
    </div>
    <span>{t('menu_3')}</span>
    
    </NavLink >

    
    <NavLink  className='menuitem'  to="/restriction">

    <div className='lo'>
    
    <img src={Restriction} alt=""/>
   
    </div>
    <span>{t('menu_4')}</span>
    </NavLink >


    <NavLink  className='menuitem'  to="/settings">

    <div className='lo'>
    
    <img src={Seting } alt=""/>
   
    </div>
    <span>{t('menu_5')}</span>
    </NavLink >


    <div class="social-container">
   
    <img src="./images/Facebook.png" alt="Load!!" id='screen'/>
    
    <img src="./images/Insta.png" alt="Load!!" id='screen'/>
    <img src="./images/Linkedin.png" alt="Load!!" id='screen'/>
    <img src="./images/Youtube.png" alt="Load!!" id='screen'/>
       
</div>
</div>

{/* Tab menu bar */}
{show3?<div className='tab_menu'>                
<NavLink  className='menuitem'  to="/dashboard">

    <div className='lo'>
    
    <img src={Dashboard} alt=""/>
   
    </div>
    <span> Dashboard</span>
</NavLink >


<NavLink  className='menuitem'  to="/adddevice">

    <div className='lo'>
    
    <img src={Device} alt=""/>
   
    </div>
    <span> Add Device</span>
    </NavLink >

    

    <NavLink  className='menuitem'  to="/ownership">

    <div className='lo'>
    
    <img src={Ownership} alt=""/>
   
    </div>
    <span> Ownership</span>
    </NavLink >

    
    <NavLink  className='menuitem'  to="/restriction">

    <div className='lo'>
    
    <img src={Restriction} alt=""/>
   
    </div>
    <span> Restriction</span>
    </NavLink >


    <NavLink  className='menuitem'  to="/settings">

    <div className='lo'>
    
    <img src={Seting } alt=""/>
   
    </div>
    <span> Setting</span>
    </NavLink >


    <div class="social-container">
   

    <img src="./images/Facebook.png" alt="Load!!" id='screen'/>
    <img src="./images/Insta.png" alt="Load!!" id='screen'/>
    <img src="./images/Linkedin.png" alt="Load!!" id='screen'/>
    <img src="./images/Youtube.png" alt="Load!!" id='screen'/>
       
</div>
</div>:null
}









</>
    
      )
}
