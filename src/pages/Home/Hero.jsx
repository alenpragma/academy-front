import React, { useEffect, useState } from "react";
import image from "../../assets/image/brekingImage.png";
import axios from "axios";

const Hero = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getBlogs() {
      await axios
        .get(
          "https://academy-backend-95ag.onrender.com/api/v1/blog/getpinpost?fbclid=IwAR3scWhX8mQS1cKe2wOP3t3NlAikk4VgTxeF4iPL_6anwY2PnoWQwxsqcIo"
        )
        .then((res) => {
          // console.log("====================================");
          setNews(res.data.PinPosts);
          // console.log("====================================");
        });
    }
    getBlogs();
  }, []);

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
  return (
    <section className="mt-10">
      {news.map((item) => (
        <div className="lg:flex gap-10 justify-center items-center" key={item._id}>
          <div className="lg:w-1/2 leading-10 space-y-3">
            <h2 className="bg-green-400 w-32 rounded-full text-slate-600 font-semibold leading-none p-3 flex justify-center">
              {item.category}
            </h2>
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="text-[18px] text-slate-500">
              {item.content.slice(0, 100)}
            </p>
            <p className="text-slate-500 text-[12px]">{formatDateTime(item.createdAt)}</p>
          </div>
          <div className="lg:w-1/2">
            <img className="rounded" src={item.image} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
