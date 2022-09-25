import React from 'react'
import './Login_page.css'
import { useRef ,useState} from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
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


export const Loginpage = ({history}) => {
   
   const [email_,setEmail_] = useState('')
   const [password_,setPassword_] = useState('')
   const [error,setError] = useState('')
   const {login,currentUser}=  useAuth()

 

  function handellogin(e){
  e.preventDefault()
    
      const log =  login(email_,password_)
      .catch(e=>{
        let errorcode = e.code.split("auth/")[1];
         setError(errorcode)
        if (errorcode === 'user-not-found'){
          
          setError("User not found")
        }
        else if(errorcode === 'wrong-password'){
          setError("Wrong password")
        }
        else if(errorcode === 'too-many-requests'){
          setError("Account is disabled for few minutes due to too many requests")
        }
        
        
    })
   
   
  }
  const {t} = useTranslation();
  return (
    <div className="main_div_login">
      { 
        currentUser? history.push('/Dashboard'):null
    }
<div id='first_div'>
         
         <img src="./images/login.png" alt=""/>
         <span id='welcome'>{t('welcome_note')}</span>
         


         {/* <LanguageContext.Consumer>
        {(language) => {
          if (language === "en") {
            return  <span id='welcome'>Welcome to Antzwave</span>;
          }
          else if  (language === "fr"){
            return <span id='welcome'>Bienvenue chez Antzwave</span>;
          }
          
        }}
      </LanguageContext.Consumer> */}
        
   </div>
    
    
      <div className="second_div">
      <span id='heading1'>{t('login_heading')}</span>
      <form action="">
        <div id='user_name_div'>
        <img src='./images/user.png'/>
        <input type="text" id='user_name' onChange={(event)=>{
          setError("")
            setEmail_(event.target.value) 
          }} />
        </div>
        <div id='password_div'>
        <img src='./images/lock.png'/>
        <input type="password" id='password'  onChange={(eveent)=>{
          setError("")
          setPassword_(eveent.target.value)
        }}/>
        </div>
        <div className="selection_div">
          <input type="radio" value="Rember"/><span>{t('remenber_tag')}</span>
         <NavLink to="/resetpass"><a>{t('forgot_pass_tag')}</a></NavLink> 
        </div>

       
      </form>
      <div className="button_div">
          <input type="submit" id="button" value={t("login_btn")}  onClick={handellogin}/>
        </div>
        <div id="error_div">
        {error}
        </div>
      <div className="bottom">
        <img src='./images/logo.svg' />

        <div className='change_lang_div'>
        <span>{t('change_lang')}</span>
        
        <div class="dropdown-content">
          <ul>
            <li onClick={()=>i18next.changeLanguage('en')}>
              English
            </li>
            <li onClick={()=>i18next.changeLanguage('fr')}>                        
              Français
            </li>
          </ul>
    
             </div>
        </div>
        
      </div>

      </div>
    </div>
  )
}

export default Loginpage