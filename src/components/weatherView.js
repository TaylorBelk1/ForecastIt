import React from 'react'
import {
    WeatherWrap,
} from './styles/weatherViewStyles';
import TodaysForecast from './todayForecast';
import TodaysWeather from './todaysWeather';

const WeatherView = (props) => {
    const { data, today } = props;

    return (
        <WeatherWrap>
            <TodaysWeather today={today} />
            <TodaysForecast data={data} />
        </WeatherWrap>
    )
}

export default WeatherView
