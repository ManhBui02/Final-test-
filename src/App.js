import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Search from  './components/Search'
import WeatherDisplay from './components/Weather';

function App() {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState(null);
  const [found, setFound] = useState(false);

  const api = useCallback(()=>{
    
  }, [cityName])

  useEffect(()=>{
      if (cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.toUpperCase()}&units=metric&appid=7cb95df58d7b6e66909685c0369bb927`)
        .then(response => response.json())
        .then(data => {
          if (data.cod === 200){
            setFound(true);
            setWeather({
              city: data.name, 
              country: data.sys.country, 
              status: data.weather[0].main, 
              temperature: data.main.temp
            })
          }else{
            setFound(false)
          }
        })
        .catch(err=>console.log(err))
      }
  }, [cityName, api,]);

  return (
    <div className="App">
      <Search searchValue={cityName} onSearching={setCityName}/>
      <div>
        {weather && <WeatherDisplay found={found} city={weather.city} country={weather.country} status={weather.status} temperature={weather.temperature}/>}
      </div>
    </div>
  );
}

export default App;
