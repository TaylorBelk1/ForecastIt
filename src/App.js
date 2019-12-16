import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import CityForm from './components/cityForm';
import axios from 'axios';
import Loading from './components/loading';
import CityOptions from './components/cityOptions';
import WeatherView from './components/weatherView';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [today, setToday] = useState(null);
  const [twelve, setTwelve] = useState(null);

  const handleSearch = (str, state) => {
    setLoading(true);
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${str},${state}`;
    axios.get(url)
      .then(res => {
        setResult(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000)

      }).catch(er => {
        setLoading(false);
        console.log(er);
      })
  }

  const handleGetWeather = (key) => {
    setLoading(true);
    const url =  `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
    axios.get(url)
      .then(res => {
        localStorage.setItem('locationKey', key);
        setResult(null);
        setWeatherData(res.data.DailyForecasts)
      }).catch(er => {
        setLoading(false);
        console.log(er)
      })
    handleGetTodaysWeather(key);
  }

  const handleGetTodaysWeather = (key) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
    axios.get(url)
      .then(res => {
        setToday(res.data);
        setLoading(false);
      }).catch(er => {
        setLoading(false);
        console.log(er)
      })

      handleGetTwelveHour(key);
  }

  const handleGetTwelveHour = (key) => {
    const url = ` http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
    axios.get(url)
      .then(res => {
        setTwelve(res.data);
        setLoading(false);
      }).catch(er => {
        setLoading(false);
        console.log(er);
      })
  }

  const handleResetSearch = () => {
    setLoading(true);
    setResult();
    setLoading(false);
  }

  return (
    <div className="App">
        <Nav />
        {
          loading ?
          <Loading />
          : weatherData ? <WeatherView data={weatherData} today={today} twelve={twelve} />
          : result ?
          <CityOptions data={result} handleGetWeather={handleGetWeather} handleResetSearch={handleResetSearch} />
          : <CityForm handleSearch={handleSearch} />
        }
    </div>
  );
}

export default App;
