import React from 'react';

import moment from 'moment';

const Date = () => {
    return (
        <div>
            <p>Day: {moment().format('dddd')} </p>
            <p> {moment().format('LL')} </p>
        </div>
    )
}

export default Date;