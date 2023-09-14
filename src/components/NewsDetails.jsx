import React from 'react';

const NewsDetails = ({item, index}) => {
    return (
        <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
    );
};

export default NewsDetails;