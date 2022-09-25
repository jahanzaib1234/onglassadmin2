import React,{ useEffect,useState }  from 'react'
import'./Setting.css';
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
export default function Setting() {
 
  const {updateemail,updatpassword} =useAuth()

  const [show,setShow] = useState(true);
  const [show2,setShow2] = useState(false);
  const [email_,setEmail_] = useState('');
  const [password_,setPassword_] = useState('');
  const [confpassword,setConfpassword] = useState('');
  const [ellert,setEllert] = useState('');
  const [ellert1,setEllert1] = useState('');
  function handelmailaupdat(e){
    e.preventDefault()
    
    updateemail(email_)
  }

  function handelpasswordupdat(e){
    e.preventDefault()
    if(password_ ==="" && confpassword === ""){
      setEllert("please fill in both fields")

    }else{
      if(password_ != confpassword ){
        setEllert("Password do not match")
      }else{
        try{
          updatpassword(confpassword)
          setEllert1("Password updated succefully")
        }catch{
          setEllert("Unable to change password")
        }
        
      }
      
    }
    
  }
  const {t} = useTranslation();
  return (
    
    <div className='setting_main'>
  
 <ul>
 <li onClick={()=>{
  setShow(true)
  setShow2(false)
}}>
<div id='avatar'>

<img src="./images/Male.png" alt="Load!!" id='why'/>
</div>
<h3>{t('menu2_1')}</h3>
</li>
<li onClick={()=>{
  setShow(false)
  setShow2(true)
}}>
<div id='avatar'>
<img src="./images/setting.png" alt="Load!!" id='why'/>
</div>

<h3>{t('menu2_2')}</h3>
</li>
 </ul>  





{
       show?<div id='profile'>
       <form>
       <h2>{t('change_pass_h')}</h2>
        <div id="group1">
          <label for="exampleInputname" id='First'>{t('paass')}</label>
          <input type="password"  id='password' placeholder={t('new_pass')}
          
          onChange={(evnt)=>{
            setEllert("")
            setEllert1("")
            setPassword_(evnt.target.value)
          }
           
          }
          />
           </div>
       
      
           <div id="group2">
          <label for="exampleInputname" id='Second'>{t('conf_pass')}</label>
          <input type="password"  id='last1' placeholder={t('conf_pass')}
          onChange={(evnt)=>{
            setEllert("")
            setEllert1("")
            setConfpassword(evnt.target.value)
          }
           
          }
          
          />
          <div id='alert'>
              {ellert}
           </div>
           <div id='alert1'>
              {ellert1}
           </div>
           </div>
           
      
           <div id="group3">
          <label for="exampleInputname" id='Third'>{t('company')}</label>
          <input type="text"  id='last2' placeholder='OnGlass'/>
           </div>
      
           <div id="group4">
          <input type="submit"  id='submit' value={t('submit_btn')} onClick={handelpasswordupdat} />
           </div>
      
      
      
      </form>
      </div>:null
       
     }
    
    {
       show2?<div id='account'>
       <form>
       <h2>{t('account_h')}</h2>
        <div id="group6">
          <label for="exampleInputname" id='First'>{t('login_id')}</label>
          <input type="type"   placeholder='contact@onglass.com' onChange={(event)=>{
            setEmail_(event.target.value) 
          }}/>
           </div>
       
           
           <div id="group5">
          <input type="submit"  id='submit' value={t('change_btn')} onClick={handelmailaupdat}/>
           </div>
      
      
      
      </form>
      </div>:null
       
     }
      
    </div>
  )
}
