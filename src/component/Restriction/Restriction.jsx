import React from 'react'
import'./Restriction.css';
import { useRef ,useState} from 'react';
import { db } from '../../firebase';
import {  updateDoc,doc} from 'firebase/firestore';
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
export default function Restriction() {

  const serial_number = useRef(null); 
  const check_box = useRef(null);
  const start_date = useRef(null); 
  const end_date = useRef(null);
  const [alert1,setAlert1] = useState(false);
  const [alert2,setAlert2] = useState(false);

  function change_restricons() {
    if (serial_number.current.value.trim() < 2 || start_date.current.value.trim() < 2 ||   end_date.current.value.trim() < 2){
      setAlert2(false);
      setAlert1(true);
    }
    else  {

      const insert_device = async ()=>{
        
        await updateDoc(doc(db, "devices",serial_number.current.value), {
          start_date: start_date.current.value,
          end_date:   end_date.current.value,
          rent_flag: "true",
      });
      }
      insert_device();
      setAlert1(false);
      setAlert2(true);
      
    }
    
  }




  const {t} = useTranslation();
  return (
    <div className='main_reestriction'>
    

    {alert1?<alert id="alert1">please fill all fields correctly .....</alert>:null}
      {alert2?<alert id="alert2">Renatal time updated Successfully .....</alert>:null}

    <form id='form1'>
  
  <label for="exampleInputEmail1" id='ser'>{t('serial_number')}</label>
  <input type="text"  id='tex' ref={serial_number}/>
  


{/* <div id="form-group2"> */}
  



  
  
  {/* start date  */}


    
    <label for="exampleInputPassword1" id='s1'>{t('start_date')}</label>
    <input type="date" id='d1' ref={start_date}/>
  
{/* End Date  */}

  
    <label for="exampleInputPassword1" id='s2'>{t('end_date')}</label>
    <input type="date" id='d2' ref={end_date}/>
  


    <label for="exampleInputPassword1" id='s3'>{t('suspend')}</label>
    <input type="checkbox" id='check' ref={check_box}/>
  

    
</form>
<button type="submit" class="btn btn-primary" id='btn' onClick={change_restricons}>{t('update_device_btn')}</button>
    </div>
  )
}
