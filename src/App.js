import './App.css';
import SearchDetails from './components/SearchDetail';
import SideBar from './components/SideBar';
import "weather-icons/css/weather-icons.css";
import { useCallback, useEffect, useState } from 'react';
import commonApi from './services/commonApi';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cityWeather, setCityWeather] = useState(null);
  const [nextFiveDays, setNextFiveDays] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const lat = data.coords.latitude;
      const lon = data.coords.longitude;
      if (data.coords) {
        getWeather(lat, lon);
        getNextFiveDays(lat, lon);
      }
    })
  }, [])


  const getWeather = async (lat, lon) => {
    try {
      const response = await commonApi('get', `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`);
      setCityWeather(response.data);
    } catch (e) {
      console.log("API CALL ERROR ", e)
    }
  }
  const getNextFiveDays = async (lat, lon) => {

    try {
      const response = await commonApi('get', `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`);
      let filteredList = [];
      var activeIndex = 0;
      for (let i = 0; i < 5; i++) {
        filteredList.push(response.data.list[activeIndex])
        activeIndex += 8;
      }
      setNextFiveDays(filteredList);
    } catch (e) {
      console.log("API CALL ERROR ", e)
    }
  }

  const getLatLong = async () => {
    try {
      const response = await commonApi('get', `/geo/1.0/direct?q=${searchValue}&limit=${1}`);
      let firstCity = response.data[0];
      if (firstCity) {
        getWeather(firstCity.lat, firstCity.lon)
        getNextFiveDays(firstCity.lat, firstCity.lon)
      } else {
        alert("Please enter a valid City Name.")
      }
    } catch (e) {
      console.log("API CALL ERROR ", e)
    }
  }
  const getSearchValue = useCallback((value) => {
    setSearchValue(value)
  }, [])

  return (
    <div className="App">
      <SideBar
        searchValue={searchValue}
        getSearchValue={getSearchValue}
        onSubmit={getLatLong}
        cityWeather={cityWeather}
      />
      <SearchDetails
        cityWeather={cityWeather}
        nextFiveDays={nextFiveDays}
        getDayWeather={(data) => { setCityWeather({ ...cityWeather, ...data }) }}
      />
    </div>
  );
}

export default App;
