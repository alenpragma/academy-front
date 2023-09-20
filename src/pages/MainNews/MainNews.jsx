import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MainNews = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className='text-4xl text-red-500'>Here Is Main News Show</h2>
        </div>
    );
};

export default MainNews;