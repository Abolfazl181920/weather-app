import React from 'react';

import Header from './Header';
import Date from './Date';
import Temp from './Temp';

const Weather = ({ weatherData }) => (
    <div>
        <Header name={weatherData.name} />
        <Date />
        <Temp temp={weatherData.main.temp} humidity={weatherData.main.humidity} />
    </div>
)

export default Weather;