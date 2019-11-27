import React from 'react'
import { Button } from './styles/cityFormStyles';

const CityOptions = props => {
    const { data, handleGetWeather, handleResetSearch } = props;

    return (
        <>
            <h3>Is this your city?</h3>
            <p>{data[0].LocalizedName}, {data[0].AdministrativeArea.EnglishName}</p>
            <Button onClick={() => handleGetWeather(data[0].Key)}>Yes</Button>
            <Button onClick={() => handleResetSearch()}>No</Button>
        </>
    )
}

export default CityOptions
