import React, { useState } from 'react';
import {
    Wrapper,
    InputField,
    Button,
    InputWrap
} from './styles/cityFormStyles';

const CityForm = (props)  => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    return (
        <Wrapper>
            <h3>Lookup your city!</h3>
            <InputWrap>
                <InputField
                    type='text'
                    name='city'
                    value={city || ''}
                    placeholder='City'
                    wdth={'65%'}
                    onChange={e => setCity(e.target.value)}
                />

                <InputField
                    type='text'
                    name='state'
                    value={state || ''}
                    placeholder='State'
                    wdth={'20%'}
                    onChange={e => setState(e.target.value)}
                />
            </InputWrap>

            <Button onClick={() => props.handleSearch(city, state)}>Search</Button>
        </Wrapper>
    )
}

export default CityForm