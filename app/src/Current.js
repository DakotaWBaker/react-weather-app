import React from 'react'

export default function Current({weatherData}) {
  console.log(weatherData.weather?.current.temp)
  return (
    <div className = 'container-fluid currentWeather'>
    <div className = 'row '>
    <div className = 'col-4'>
        <div className = 'row'>
            <div className = 'col'>
        <h2>Current Weather</h2>
        </div>
</div>        
<div className = 'row currentRow'>
        <div className = 'row '>
        <div className = 'col'>
            <h3>{weatherData.city}</h3>
            </div> 
        </div>
        <div className = 'row'>
        <div className = 'col'>
         <img className = 'icons' src = {`http://openweathermap.org/img/w/${weatherData.weather?.current.weather[0].icon}.png`} />
            </div> 
            <div className = 'col'>
            <h2>{weatherData.weather?.current.temp}</h2>
        </div>
        </div>
        <div className = 'row'>
        <div className = 'col'>
        <h4>{weatherData.weather?.current.weather[0].description}</h4>
            </div> 
        
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}
