import React, { useState, useEffect } from 'react';

import Weather from './Weather';

const App = () => {

    const [ lat, setLat ] = useState(['35.6892']);
    const [ long, setLong ] = useState(['51.3890']);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            const fetchData = async () => {
                fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    resolve();
                    setData(result);
                });
            }
            fetchData();
        });

        data
            .then(() => {
                console.log('Successfull');
            }, () => {
                console.log('Fail');
            });
            
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

            <form>
                <input onChange={(event) => setLat(event.target.value)} type="text" placeholder="lat ..." />
                <input onChange={(event) => setLong(event.target.value)} type="text" placeholder="long ..." />
            </form>
        </div>
    );
}

export default App;