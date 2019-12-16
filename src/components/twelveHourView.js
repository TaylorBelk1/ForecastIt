import React, { useEffect, useState } from 'react'
import { iconEnum } from './weatherIcons';
import hot from './assetts/temp/hot.png';
import cold from './assetts/temp/cold.png';
import rainPercent from './assetts/other/rainpercent.png';
import {
    SingleHourWrap,
    ImageTextWrap
} from './styles/weatherViewStyles';


const TwelveHourView = (props) => {
    const { item } = props;
    const [ time, setTime ] = useState('');
    const [ tempIcon, setTempIcon ] = useState();

    useEffect(() => {
        let date = new Date(item.DateTime).toLocaleTimeString();
        let partOne;
        let partTwo;
        if(date.length === 10) {
            partOne = date.split('').slice(0, 4)
            partTwo = date.split('').slice(8)
        } else {
            partOne = date.split('').slice(0, 5)
            partTwo = date.split('').slice(8)
        }

        date = `${partOne.join('')} ${partTwo.join('')}`
        setTime(date);

        item.Temperature.Value > 70 ? setTempIcon(hot) : setTempIcon(cold);
    }, [item.DateTime, item.Temperature.Value])

    return (
        <SingleHourWrap>
            <p>{time && time}</p>
            <img src={iconEnum[item.WeatherIcon]} className='icon' alt='current weather' />
            <p>{item.IconPhrase}</p>
            <ImageTextWrap>
                <img src={tempIcon} className='smaller' alt='temperature visual' />
                <p>{item.Temperature.Value}&deg;{item.Temperature.Unit}</p>
            </ImageTextWrap>
            <ImageTextWrap>
                <img src={rainPercent} className='smaller' alt='rain percent visual' />
                <p>{item.PrecipitationProbability}%</p>
            </ImageTextWrap>
        </SingleHourWrap>
    )
}

export default TwelveHourView
