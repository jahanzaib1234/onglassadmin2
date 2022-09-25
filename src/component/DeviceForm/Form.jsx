import React from 'react'
import { useRef ,useState} from 'react';
import'./Form.css';
import { db } from '../../firebase';
import {  setDoc,doc} from 'firebase/firestore';
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
  const unique_id = useRef(null);
  const unique_password = useRef(null);
  const [alert1,setAlert1] = useState(false);
  const [alert2,setAlert2] = useState(false);
  function add_new_device() {
    if (serial_number.current.value.trim() < 2 || unique_id.current.value.trim() < 2 ||   unique_password.current.value.trim() < 2){
      setAlert2(false);
      setAlert1(true);

    }
    else  {

      const insert_device = async ()=>{
        await setDoc(doc(db,"devices",serial_number.current.value), {
          associated_with: "Null",
          association: "false",
          id: unique_id.current.value,
          password: unique_password.current.value,
          start_date:"00.00.00",
          end_date:   "00.00.00",
          rent_flag: "false",
        });
      }
      insert_device();
      setAlert1(false);
      setAlert2(true);
      
    }
    
  }
    
  const {t} = useTranslation();
  return (
    <div className='main_form_'>
      {alert1?<alert id="alert1">please fill all fields correctly .....</alert>:null}
      {alert2?<alert id="alert2">Device Added Successfully .....</alert>:null}
      
    <form>
  <div id="form-group">
    <label >{t('serial_number')}</label>
    <input type="text" ref={serial_number} />
     </div>
  <div id="form-group">
    <label >{t('uniqueid')}</label>
    <input type="text" id='second' ref={unique_id}/>
  </div>  

  <div id="form-group">
    <label >{t('password_tag')}</label>
    <input type="text" ref={unique_password}/>
  </div>
    
</form>
<input type="submit" class="btn btn-primary"value={t('add_device_btn')} id='addbtn' onClick={add_new_device}/>
    </div>
  )
}
