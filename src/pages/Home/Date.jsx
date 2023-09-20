import React from 'react';
import moment from 'moment';

const Date = () => {
    return (
        <div className='px-5 w-64 bg-green-400 p-2 rounded'>
            <p className="text-[20px] font-semibold">{moment().format('D MMMM')}</p>
        </div>
    );
};

export default Date;