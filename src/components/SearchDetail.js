import { mainIcons } from "../services/constant";
import { timeStampToTime } from "../services/utility";
import CustomCard from "./CustomCard";

const SearchDetail = ({ cityWeather, nextFiveDays, getDayWeather }) => {
    const selectTodaysData = (item) => {
        getDayWeather(item)
    }

    return (
        <div className="search-detail">
            <div className="title-box">
                <h3>Next 5 Days</h3>
            </div>

            <div className="next-day-cards">
                {
                    nextFiveDays && nextFiveDays.map((item, index) => {
                        return (
                            <CustomCard
                                key={index}
                                type='small'
                                item={item}
                                title={timeStampToTime(item.dt, true)}
                                iconName={mainIcons[item?.weather[0]?.main]}
                                detail={item.main.temp}
                                degreeCode={<span>&#8451;</span>}
                                selectDay={selectTodaysData}
                            />
                        )
                    })
                }
            </div>

            <h3>Today's Highlights</h3>

            <div className="highlights-cards">
                <CustomCard
                    type='big'
                    title='Max/Min'
                    iconName={mainIcons[cityWeather?.weather[0]?.main]}
                    detail={`${cityWeather?.main?.temp_max}/${cityWeather?.main?.temp_min}`}
                />
                <CustomCard
                    type='big'
                    title='Wind Status'
                    iconName="wi-windy"
                    detail={`${cityWeather?.wind?.speed}meter/sec`}
                />

                <CustomCard
                    type='big'
                    title='Clouds'
                    iconName="wi-cloud"
                    detail={`${cityWeather?.clouds?.all}%`}
                />
                <CustomCard
                    type='big'
                    title='Pressure'
                    iconName="wi-cloud-down"
                    detail={`${cityWeather?.main?.pressure}hPa`}
                />
                <CustomCard
                    type='big'
                    title='Lat/Lon'
                    iconName="wi-lunar-eclipse"
                    detail={cityWeather?.coord?.lat ? `${cityWeather?.coord?.lat.toFixed(2)}/${cityWeather?.coord?.lon.toFixed(2)}` : "0.00/0.00"}
                />
                <CustomCard
                    type='big'
                    title='Sunrise & Sunset'
                    iconName="wi-sunrise"
                    detail={cityWeather?.sys ? `${timeStampToTime(cityWeather?.sys?.sunrise)}/${timeStampToTime(cityWeather?.sys?.sunset)}` : ''}
                />
            </div>


        </div>
    )
}

export default SearchDetail;