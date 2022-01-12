import React from 'react';

import moment from 'moment';

const CardExampleCard = ({ weatherData }) => (
    <div>
        <p> {weatherData.name} </p>
        
        <div>
            <p>Day: {moment().format('dddd')} </p>
            <p> {moment().format('LL')} </p>
        </div>

        <div>
            <p>Temprature: {weatherData.main.temp} &deg;C </p>
            <p>Humidity: {weatherData.main.humidity} % </p>
        </div>
    </div>
)

export default CardExampleCard;