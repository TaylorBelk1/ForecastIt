import React from 'react'

const City = props => {
    const { data } = props;

    return (
        <div>
            <p>{data.EnglishName},{data.AdministrativeArea.EnglishName}</p>
        </div>
    )
}

export default City
