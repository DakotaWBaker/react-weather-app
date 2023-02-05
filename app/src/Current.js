import React from "react";
import temp from "./Assets/hightemp.png"

export default function Current({ weatherData }) {
    let windDirection = '';
    if (weatherData.weather?.current.wind_deg >= 340 && weatherData.weather?.current.wind_deg <= 20) {
        windDirection = 'North'
    }
    else if (weatherData.weather?.current.wind_deg > 20 && weatherData.weather?.current.wind_deg < 70) {
        windDirection = 'NorthEast'
    }
    else if (weatherData.weather?.current.wind_deg >= 70 && weatherData.weather?.current.wind_deg <= 110) {
        windDirection = 'East'
    }
    else if (weatherData.weather?.current.wind_deg > 110 && weatherData.weather?.current.wind_deg < 160) {
        windDirection = 'SouthEeast'
    }
    else if (weatherData.weather?.current.wind_deg >= 160 && weatherData.weather?.current.wind_deg <= 200) {
        windDirection = 'South'
    }
    else if (weatherData.weather?.current.wind_deg > 200 && weatherData.weather?.current.wind_deg < 250) {
        windDirection = 'SouthWest'
    }
    else if (weatherData.weather?.current.wind_deg >= 250 && weatherData.weather?.current.wind_deg <= 290) {
        windDirection = 'West'
    }
    else if (weatherData.weather?.current.wind_deg > 290 && weatherData.weather?.current.wind_deg < 340) {
        windDirection = 'NorthWest'
    }
  console.log(weatherData.weather?.current, windDirection)
  return (
    <div className="container-fluid currentWeather">
      <div className="row ">
        <div className="col-4">
          <div className="row">
            <div className="col">
              <h2>Current Weather</h2>
            </div>
          </div>
          <div className="row currentRow">
            <div className="row ">
              <div className="col">
                <h3>{weatherData.city}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="icons"
                  src={`http://openweathermap.org/img/w/${weatherData.weather?.current.weather[0].icon}.png`}
                />
              </div>
              <div className="col">
                <h2>{weatherData.weather?.current.temp}<sup>o</sup></h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className={temp}>{weatherData.weather?.current.weather[0].description}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className = 'col text-end'>
            <div className="row text-end">
            <div className = 'col'>
            <h4>F/C</h4>
            </div>
            </div>
            <div className="row">
            <div className = 'col'>
            <h5>Feels like {weatherData.weather?.current.feels_like}<sup>o</sup></h5>
            </div>
            </div>
            <div className="row">
            <div className = 'col'>
            <h5><img src = {temp} className = 'tempArrow' />{weatherData.weather?.daily[0].temp?.max} <img src = {temp} className = 'lowTemp' /> {weatherData.weather?.daily[0].temp?.min}</h5>
            </div>
            </div>
            <div className="row">
            <div className = 'col'>
            <h5>{weatherData.weather?.current.wind_speed} mph <img src = {temp} className = {`direction${windDirection}`}/></h5>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
