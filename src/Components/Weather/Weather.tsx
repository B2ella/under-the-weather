import React from "react";
import { useState, useEffect } from "react";
import { initialWeather } from "../Data/Data";
import TodaysDate from "../Date/Date";
import Input  from "../Input/Input";
import './Weather.css'

export default function Weather(){
const [city, setCity] = useState("London");
const [cityInfo, setCityInfo] = useState([]);
const [weather, setWeather] = useState(initialWeather);
const [error, setError] = useState(null);
    

useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39637cf8059492fb8c980ff66cfcbaa5&units=metric`,
      {
        headers: { Accept: "application/json" },
      }
    )
      .then((res) => res.json())
      .then((weatherObj) => setWeather(weatherObj))
      .catch((err) => setError(err));

      fetch(`https://api.api-ninjas.com/v1/city?name=${city}`, {
      headers: {
        Accept: "application/json",
        "X-Api-Key": "FQ50K4WJVzFyxFCK3TX4QA==Dazk8hjouJJEnStK",
      },
    })
      .then((res) => res.json())
      .then((cityObj) => setCityInfo(cityObj))
      .catch((err) => setError(err));

      
  }, [city]);
  if (error) {
    return <p>Error!</p>;
  }

  function convertUnixDate(unixdate: number) {
    return new Date(unixdate * 1000);
  }

  return (
    <div className="App-header">
            
            
             <h1 className="cityname">{city}</h1>

             <div className="population">
             <b>Population: </b>
             {cityInfo.length !== 0 && <span>{cityInfo[0]["population"]}</span>}
              </div>
             
             <h3 className='Description'>{weather.weather[0]["description"]}</h3> 
             <div className="Tempature"><TodaysDate/>{Math.floor(Number(weather.main.temp))}°</div>
             <p className="Info">Weather Information:</p>

             <div className='WeatherInfo'>
             <p>MIN TEMPATURE<br/><span style={{fontSize:'30px'}}>{Math.floor(Number(weather.main.temp_min))}°</span></p>
             
             <p>MAX TEMPATURE<br/><span style={{fontSize:'30px'}}>{Math.floor(Number(weather.main.temp_max))}°</span></p>

             <p>SUNRISE<br/><span style={{fontSize:'25px'}}>{convertUnixDate(Number(weather.sys.sunrise)).toLocaleTimeString
             ([],{hour: "2-digit", minute: "2-digit",})} am</span></p>

             <p>SUNSET<br/><span style={{fontSize:'25px'}}>{convertUnixDate(Number(weather.sys.sunset)).toLocaleTimeString
             ([],{hour: "2-digit", minute: "2-digit",})} pm</span></p>
             </div>
        
        <div className="WeatherInfoSecondHalf">  
             
             <p>WIND <br/><span style={{fontSize:'30px'}}>{Math.floor(Number(weather.wind.speed))}</span></p>
             <p>HUMIDITY <br/><span style={{fontSize:'30px'}}>{Math.floor(Number(weather.main.humidity))}</span></p>
             <p>PRESSURE <br/><span style={{fontSize:'30px'}}>{weather.main.pressure}</span></p>
             <p>FEELS LIKE <br/><span style={{fontSize:'30px'}}>{Math.floor(Number(weather.main.feels_like))}°</span></p>
        </div>
        <Input setCity={setCity} />
        </div>
  )
}