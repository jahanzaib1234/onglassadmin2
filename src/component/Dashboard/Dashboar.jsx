import React from 'react'
import { useEffect,useState } from 'react';
import'./Dashboar.css';
import { FiMenu } from "react-icons/fi";
import { db } from '../../firebase';
import { Redirect } from 'react-router-dom';
import {  collection, getDocs} from 'firebase/firestore';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
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
const AnyReactComponent = ({ icon }) => <div>{icon}</div>;


var online_deives = 0;
var offline_devices = 0;
var alt = 30.341807;
var log = 73.378437;
const containerStyle = {
  
  width: '100%',
  height: '100%'
};

const center = {
  lat: 30.348801,
  lng: 73.387993
};

  const defaultProps = {
    center: {
      lat: 30.348801
      ,
      lng: 73.387993
    },
    zoom:6
  };
 
export default function Dashboar({authoribzed}) {
 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAaUiMX993D3ewtoTaLs5xlC_WfupBopIA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  },[])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const devices_collection = collection(db,"devices")
  const user = collection(db,"users")
  const [devices_number , setDevices_number ] = useState([]);
  const [users, setUsers] = useState([])
  const [users_device, setUsers_device] = useState([])
  const [position_vales, setPosition_vales] = useState([])
  var availabele_devices = 0; 
 

  
  useEffect(()=>{
   
      const user_data = async()=>{
      const  data = await getDocs(user)
      setUsers(data.docs.map((doc)=>({...doc.data() , id: doc.id})))
      
            }
    user_data();
  },[])
useEffect(()=>{
  
  const device_data = async()=>{
    
    users.map((user_)=>{
      var repo_adre = "users/"+user_.id+"/devices_list";
      const user_device = collection(db,repo_adre);
     
       online_deives=0
       offline_devices=0
        const user_devices_data = async()=>{
          const  data = await getDocs(user_device)
          setUsers_device(data.docs.map((doc)=>({...doc.data() , id: doc.id})))
          const device_data_list = data.docs.map((doc)=>({...doc.data()}));
          device_data_list.map((device_data)=>{ 
            
            
             if(device_data.status === "online") {
              online_deives+=1;
               
             }
             else if(device_data.status ==="offline"){
               offline_devices+=1;
             }
              //  console.log(device_data.log )
              
              console.log()
              
              setPosition_vales((position_vales)=>[ ...position_vales,{
                
                lat:device_data.alt ,
                lng:device_data.log
            
               }])

          })
          
         
        }
        user_devices_data();
  
    })   
  }
  device_data();
},[users])  

  useEffect(() => {
    const get_divices_total_number = async()=>{
      const  data = await getDocs(devices_collection)
      setDevices_number(data.docs.map((doc)=>({...doc.data() , id: doc.id})))
      
    }
    get_divices_total_number();
  },[])
  
  
  devices_number.map((device)=>{
    if (device.association === "false" ){
     
      availabele_devices+=1;

    }
  },[])
  const {t} = useTranslation();
  return (
    
    <div className='main_Dash'>

      
    <div className='test'>

    
<div id='first'>



<img src="./images/Question.png" alt="Load!!" id='why'/>

<h1 id='f1'>{online_deives}</h1>
<span id='l2'>
{t('online_devices')}</span>

<img src="./images/Screen.png" alt="Load!!" id='screen'/>


</div>



{/* second cards */}

<div id='first'>



<img src="./images/Question.png" alt="Load!!" id='why'/>

<h1 id='f1'>{devices_number.length}
</h1>

<span id='l2'>
{t('total_devices')}</span>

<img src="./images/Second.png" alt="Load!!" id='screen'/>


</div>






{/* third Div cards */}


<div id='first'>



<img src="./images/Question.png" alt="Load!!" id='why'/>

<h1 id='f1'>{offline_devices}</h1>
<span id='l2'>
{t('offline_devices')}</span>

<img src="./images/Third.png" alt="Load!!" id='screen'/>


</div>


{/* Fouth Cards */}

<div id='first'>



<img src="./images/Question.png" alt="Load!!" id='why'/>

<h1 >
 {availabele_devices}
</h1>

<span >
{t('availabel_devices')}</span>
 
<img src="./images/Fourth.png" alt="Load!!" id='screen'/>


</div>



 {/* Maps Add in  */}

      

</div>


<div className='map' >
{isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        
        {
        
        position_vales.map((devicee_)=>{
          
        const marker_centerr= {
          lat: devicee_.lat,
          lng: devicee_.lng
        };
        
        return      <Marker position={marker_centerr}  />
        })}
        
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>}
        </div>


</div> 





    
  )
}
