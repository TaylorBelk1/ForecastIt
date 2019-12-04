import React from 'react'
import { iconEnum } from './weatherIcons';
import { Content } from './styles/weatherViewStyles';

const WeatherData = (props) => {
    const { Icon, IconPhrase } = props.data;
    const { title } = props;
    const { Maximum, Minimum } = props.temperature;

    return (
        <Content>
            <h2>{title}</h2>
            <img src={iconEnum[Icon]} alt='sunny' />
            <h4>{IconPhrase}</h4>
            {title === 'Day' ?
                <p>{Maximum.Value}&deg; {Maximum.Unit}</p>
                : <p>{Minimum.Value}&deg; {Minimum.Unit}</p>}

        </Content>
    )
}

export default WeatherData
