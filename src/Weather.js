import React from 'react';

import moment from 'moment';

const CardExampleCard = ({ weatherData }) => (
    <div className="main">
        <p className="header"> {weatherData.name} </p>
        
        <div className="flex">
            <p className="day">Day: {moment().format('dddd')} </p>
            <p className="day"> {moment().format('LL')} </p>
        </div>

        <div className="flex">
            <p className="temp">Temprature: {weatherData.main.temp} &deg;C </p>
            <p className="temp">Humidity: {weatherData.main.humidity} % </p>
        </div>
    </div>
)

export default CardExampleCard;