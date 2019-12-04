import styled from 'styled-components';

export const WeatherWrap = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

export const BoxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const WeatherBox = styled.div`
    width: 45%;
    background: rgba(238, 238, 238, 0.2);
    border-radius: 10px;
`

export const Content = styled.div`
    padding: 20px 0;
`

export const ForecastWrap = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    margin-right: 40px;
`

export const TodayWrap = styled.div`
    width: 45%;
`

export const TodaysWeatherBox = styled.div`
    width: 45%;
    background: rgba(238, 238, 238, 0.2);
    margin: 0 auto;
    border-radius: 10px;
`

export const TwelveHourWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const CurrentBoxes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SingleHourWrap = styled.div`
    background: rgba(238, 238, 238, 0.2);
    border-radius: 10px;
    margin: 0 auto;
    width: 7%;

    img {
        width: 25px;
        height: auto;
    }
`

export const TwelveHourBoxWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`