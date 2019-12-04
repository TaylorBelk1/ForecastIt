import React from 'react'
import {
    TwelveHourWrap,
    TwelveHourBoxWrap
} from './styles/weatherViewStyles';
import TwelveHourView from './twelveHourView';


const TwelveHour = (props) => {
    const { twelve } = props;
    console.log(props)

    return (
        <TwelveHourWrap>
            <div>
                <h4>Twelve Hour Forecast</h4>
            </div>
            <TwelveHourBoxWrap>
                {twelve && twelve.map(item => {
                    return <TwelveHourView key={item.EpochDateTime} item={item} />
                })}
            </TwelveHourBoxWrap>
        </TwelveHourWrap>
    )
}

export default TwelveHour
