import React, { useState, useEffect } from 'react';

import Weather from './Weather';

const App = () => {

    const [ lat, setLat ] = useState(['35.6892']);
    const [ long, setLong ] = useState(['51.3890']);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result);
            });
        }
        fetchData();

    }, [ lat, long ]);

    return(
        <div className="App">
            {
                (typeof data.main != 'undefined') ? (
                    <Weather weatherData={data} />
                ) : (
                    <></>
                )
            }
        </div>
    );
}

export default App;