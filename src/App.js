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

    const preventForm = (event) => {
        event.preventDefault();
    }

    return(
        <div className="App">
            {
                (typeof data.main != 'undefined') ? (
                    <Weather weatherData={data} />
                ) : (
                    <></>
                )
            }

            <form onSubmit={preventForm}>
                <input type="text" placeholder="search" />
                <button>Search</button>
            </form>
            
        </div>
    );
}

export default App;