import React from 'react'
import {
    WeatherWrap,
    CurrentBoxes
} from './styles/weatherViewStyles';
import TodaysForecast from './todayForecast';
import TodaysWeather from './todaysWeather';
import TwelveHour from './twelveHour';

const WeatherView = (props) => {
    const { data, today, twelve } = props;

    return (
        <WeatherWrap>
            <CurrentBoxes>
                <TodaysWeather today={today} />
                <TodaysForecast data={data} />
            </CurrentBoxes>
            <div>
                {twelve && twelve ? <TwelveHour twelve={twelve} /> : null}
            </div>
        </WeatherWrap>
    )
}

export default WeatherView
