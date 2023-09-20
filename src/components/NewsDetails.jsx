import React from "react";
import { Link } from "react-router-dom";

const NewsDetails = ({ item }) => {
    const {img, title, details, date, _id} = item;
  return (
    <div className="space-y-5  shadow-md p-5" key={_id}>
      <Link>
        <img className="rounded" src={img} alt="" />
      </Link>
      <Link to={`/main_news/${_id}`} className="cursor-pointer">
        <h2 className="font-bold text-[18px]">{title}</h2>
      </Link>
      <p className="text-slate-500">{details.slice(0, 100)}</p>
      <p className="text-slate-500 text-[12px]">{date}</p>
    </div>
  );
};

export default NewsDetails;
