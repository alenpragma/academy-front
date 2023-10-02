import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { blogdata } from "../slices/blogDataSlice";


const formatDateTime = (createdAt) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date(createdAt).toLocaleDateString(undefined, options);
};

const truncateText = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  } else {
    return text;
  }
};

const NewsDetails = ({ item ,onClick}) => {
  let disp = useDispatch()
  // console.log(item);
  const navigate = useNavigate();


  const truncatedContent = truncateText(item.content, 20);
  return (
    <div className="space-y-5 hover:shadow-md transition duration-300 p-5">
      <div onClick={onClick} className="overflow-hidden">
        <img
          className="rounded w-full h-[250px] cursor-pointer object-cover hover:scale-110 transition duration-500"
          src={item.image}
          alt=""
        />
      </div>
      <h2 className="font-bold text-[18px]" onClick={() => goToNews()}>
        <div className="cursor-pointer hover:text-[#1779BA] transition duration-300">
          {item.title}
        </div>
      </h2>
      <p className="text-slate-500">{truncatedContent}</p>
      <small className="text-slate-500">
        {item.status === "Post by owner"
          ? "Post by owner"
          : item.status === "Post by superadmin"
          ? "Post by Superadmin"
          : "Post by Admin"}
      </small>
      <p className="text-slate-500 text-[12px]">
        {formatDateTime(item.createdAt)}
      </p>
    </div>
  );
};

export default NewsDetails;
