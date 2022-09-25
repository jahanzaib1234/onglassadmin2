import React from 'react'
import { useRef ,useState} from 'react';
import { db } from '../../firebase';
import {  updateDoc,doc} from 'firebase/firestore';
import'./Ownership.css';
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
export default function Form() {

  const serial_number = useRef(null); 
  const check_box = useRef(null);
  const [alert1,setAlert1] = useState(false);
  const [alert2,setAlert2] = useState(false);
  function change_ownership() {
    if (serial_number.current.value.trim() < 2 ){
      setAlert2(false);
      setAlert1(true);
    }
    else  {

      const insert_device = async ()=>{
        
        await updateDoc(doc(db, "devices",serial_number.current.value), {
          associated_with: "Null",
          association: "false"
      });
      }
      insert_device();
      setAlert1(false);
      setAlert2(true);
      
    }
    
  }
  const {t} = useTranslation();
  return (
    <div className='main_owner'>
       {alert1?<alert id="alert1">please fill Serial fields correctly .....</alert>:null}
      {alert2?<alert id="alert2">Ownership remove Successfully .....</alert>:null}
    <form id='form1'>
  
    <label for="exampleInputEmail1" id='ser'>{t('serial_number')}</label>
    <input type="text"  id='tex' ref={serial_number}/>
    
  

  {/* <div id="form-group2"> */}
    <label for="exampleInputPassword1" id='ser2'>{t('assocciation')}</label>
    <input type="checkbox" id='rad' ref={check_box}/>
  {/* </div> */}

    
</form>
<button type="submit" class="btn btn-primary" id='btnn' onClick={change_ownership}>{t('update_device_btn')}</button>
    </div>
  )
}
