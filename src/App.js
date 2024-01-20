import React, { useState } from "react"
import winter from "./images/winter.jpeg"


const App = ()=>{

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [hemisphere, setHemisphere] = useState("");
    const [month, setMonth] = useState(()=>{
      return   new Date().getMonth()+1
    });

    function getLocation(){
        let la, lt
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(  
              (position) => {
                la = position.coords.latitude;
                lt = position.coords.latitude;
                  setLatitude(la);
                  setLongitude(lt);
                
                if(la> 0){
                    setHemisphere("Northern Hemisphere");
                }
                else if(la < 0){
                    setHemisphere("Southern Hemisphere");
                }
                else{
                    setHemisphere("Equator");
                }
            }
            )
        }
    }

    return (

        <div>
           <button onClick={getLocation}>Get Location</button>
           <h1>Latitude: {latitude}</h1>
           <h1>Longitude: {longitude}</h1>
           <h1>Hemisphere: {hemisphere}</h1>
           <h1>Month: {month}</h1>
       

        {/* winter condition */}
        

        {
            hemisphere != "" && ((hemisphere == "Northern Hemisphere" && (month >=11 || month <= 3))
            || (hemisphere == "Sothern Hemisphere" && (month >= 5 && month <= 9))
            )
            &&
             (
                <div>
                    <h1>Winter</h1>
                    <img src={winter}></img>
                </div>
             ) 
        }

        {/* Summer Condition */}
          
          {

          }

        </div> 
    )
}

export default App