import { useEffect, useMemo, useRef, useState } from "react";
import { days, mainIcons, options } from "../services/constant";

const SideBar = ({ searchValue, getSearchValue, onSubmit, cityWeather }) => {
    const searchRef = useRef(null)
    const [time, setTime] = useState('');
    useEffect(() => {
        searchRef.current.focus();
    }, [])

    useEffect(() => {
        const interval = window.setInterval(() => {
            let date = new Date(cityWeather?.dt * 1000);
            setTime(new Intl.DateTimeFormat("en-US", options).format(date))
        }, 1000);
        return () => window.clearInterval(interval);
    }, [cityWeather])


    return (
        <div className="sidebar">
            <div className="search-box">
                <input
                    type='text'
                    className="search-input"
                    placeholder="Search for places..."
                    ref={searchRef}
                    value={searchValue}
                    onChange={(e) => getSearchValue(e.target.value)}
                />
                <button type="button" onClick={onSubmit} className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <div className="selected-image">
                <div className="image-overlay">
                    <h3 className="city-name">{cityWeather?.name},{cityWeather?.sys?.country}</h3>
                </div>
            </div>
            <div className="selected-detail">
                <div className="main-icon">
                    <i className={'wi ' + mainIcons[cityWeather?.weather[0]?.main]}></i>
                </div>
                <h1 className="selected-temp">{cityWeather?.main?.temp}&#8451;</h1>
                <h3 className="selected-day">{time}</h3>
                <h5 className="selected-type">{cityWeather?.weather[0]?.description}</h5>
                <h5 className="selected-moisture">Humidity {cityWeather?.main?.humidity}%</h5>

            </div>
        </div>
    )
}

export default SideBar;

