import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Stage from "./Stage";
import Search from "./Search";
import Current from "./Current";
const key = "f669783f567114404de987f93ef2e4fc";



function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [zip, setZip] = useState('')
  
  async function getWeather(data) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&units=imperial&appid=${key}`
    );
    setWeatherData({weather: response.data, city: data.city});
  }
 
    async function getData(e) {
      let zip = e
      const coordinates = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`);
      let data = {
        lat: coordinates.data.coord.lat,
        lon: coordinates.data.coord.lon,
        city: coordinates.data.name,
      };
      setLat(data.latitude);
      setLon(data.longitude);

      getWeather(data);
    }
  
return (
  <>
  <Search
getData= {getData}
  />
  <Current
  weatherData = {weatherData}
  />
  </>
)
}

export default App;
