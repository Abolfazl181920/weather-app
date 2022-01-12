import React from 'react';

const Temp = ({ temp, humidity }) => {
    return (
        <div>
            <p>Temprature: {temp} &deg;C </p>
            <p>Humidity: {humidity} % </p>
        </div>
    )
}

export default Temp;