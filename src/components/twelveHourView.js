import React from 'react'
import { iconEnum } from './weatherIcons';
import {
    SingleHourWrap
} from './styles/weatherViewStyles';

const TwelveHourView = (props) => {
    const { item } = props;

    return (
        <SingleHourWrap>
            <p>{new Date(item.EpochDateTime).toLocaleString()}</p>
            <img src={iconEnum[item.WeatherIcon]} alt='current weather' />
        </SingleHourWrap>
    )
}

export default TwelveHourView
