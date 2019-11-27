import React from 'react'
import {
    ForecastWrap,
    WeatherBox,
    BoxWrapper
} from './styles/weatherViewStyles';
import WeatherData from './weatherData';

const TodaysForecast = (props) => {
    const { data } = props;

    return (
        <ForecastWrap>
            <h2>Today's Forecast</h2>
            <BoxWrapper>
                <WeatherBox>
                    <WeatherData title={'Day'} data={data[0].Day} temperature={data[0].Temperature}/>
                </WeatherBox>
                <WeatherBox>
                    <WeatherData title={'Night'} data={data[0].Night} temperature={data[0].Temperature}/>
                </WeatherBox>
            </BoxWrapper>
        </ForecastWrap>
    )
}

export default TodaysForecast
