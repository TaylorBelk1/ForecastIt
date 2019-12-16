import React from 'react';
import { TodaysWeatherBox, TodayWrap, Content } from './styles/weatherViewStyles';
import { iconEnum } from './weatherIcons';

const TodaysWeather = (props) => {
    const { today } = props;

    return (
        <TodayWrap>
            <h2>Current Weather</h2>
            {today && today ?
            <TodaysWeatherBox>
                <Content>
                    <h3>{new Date(today[0].LocalObservationDateTime).toLocaleDateString()}</h3>
                    <img src={iconEnum[today[0].WeatherIcon]} alt='current weather' />
                    <h4>{today[0].WeatherText}</h4>
                    <p>{today[0].Temperature.Imperial.Value}&deg; {today[0].Temperature.Imperial.Unit}</p>
                </Content>
            </TodaysWeatherBox>
            : null }
        </TodayWrap>

    )
}

export default TodaysWeather
