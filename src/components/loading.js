import React from 'react'
import sunny from './assetts/day/sunny.png';
import {
    LoadingWrapper
 } from './styles/loadingStyles';

const Loading = () => {
    return (
        <LoadingWrapper>
            <img src={sunny} alt='sun' id='load' />
        </LoadingWrapper>
    )
}

export default Loading
