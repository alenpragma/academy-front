import React from "react";
import { Link } from "react-router-dom";

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

const NewsDetails = ({ item }) => {
  console.log(item);

  const truncatedContent = truncateText(item.content, 20);

  return (
    <div className="space-y-5  shadow-md p-5" key={item._id}>
      <Link>
        <img className="rounded w-full h-[250px]" src={item.image} alt="" />
      </Link>
      <h2 className="font-bold text-[18px] ">
        <Link to={"/"} className="cursor-pointer ">
          {item.title}
        </Link>
      </h2>
      <p className="text-slate-500">{truncatedContent}</p>
      <small className="text-slate-500">{item.status === "Post by owner" ? "Post by owner" : item.status === "Post by superadmin" ? "Post by Superadmin" : "Post by Admin"}</small>
      <p className="text-slate-500 text-[12px]">
        {formatDateTime(item.createdAt)}
      </p>
    </div>
  );
};

export default NewsDetails;
