import React from 'react';
import { WeatherBox, TodayWrap, Content } from './styles/weatherViewStyles';
import { iconEnum } from './weatherIcons';

const TodaysWeather = (props) => {
    const { today } = props;
    console.log(today)

    return (
        <TodayWrap>
            <h2>Current Weather</h2>
            <WeatherBox>
                <Content>
                    <h3>{new Date(today[0].EpochTime).toLocaleDateString()}</h3>
                    <img src={iconEnum[today[0].WeatherIcon]} alt='current weather' />
                    <h4>{today[0].WeatherText}</h4>
                    <p>{today[0].Temperature.Imperial.Value}&deg; {today[0].Temperature.Imperial.Unit}</p>
                </Content>
            </WeatherBox>
        </TodayWrap>

    )
}

export default TodaysWeather
