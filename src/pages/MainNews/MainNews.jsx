import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { blogdata } from "../../slices/blogDataSlice";
import axios from "axios";
import adds from "../../assets/image/add-01.png";
const MainNews = () => {
  const [sliceData, setSliceData] = useState([]);
  const sideData = sliceData.slice(0, 3);

  const news = useLoaderData();
  let disp = useDispatch();
  let data = useSelector((state) => state);
  // console.log("====================================");
  // console.log("blogdataaaaaa", data.blogData.blogdata);
  // console.log("====================================");
  let blog = data.blogData.blogdata;
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
  window.addEventListener("popstate", function (event) {
    // This function will be called when the back arrow is clicked
    disp(blogdata(null));
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const relatedNews = sliceData.filter(
    (item) => item.category === blog.category
  );
  const relatedData = relatedNews.slice(0, 3);

  useEffect(() => {
    async function getBlogs() {
      await axios
        .get("https://academy-backend-95ag.onrender.com/api/v1/blog/getBlog")
        .then((res) => {
          // console.log("====================================");
          setSliceData(res.data.blogs);
          // console.log("====================================");
        });
    }
    getBlogs();
  }, []);
  const handleData = (item) => {
    disp(blogdata(item));
    window.scrollTo({top: 0})
  }
  return (
    <section className="max-w-6xl lg:mx-auto mt-10 mb-20 mx-5">
      <div className="lg:flex gap-8">
        <div className="lg:w-3/4">
          <div className="space-y-5">
            <h2 className="text-[#1779BA] font-bold border-b-2 border-[#1779BA] w-24 pb-2">
              {blog?.category}
            </h2>
            <h2 className="font-semibold text-4xl">{blog?.title}</h2>
            <p>Dhaka, Bangladesh</p>
            <div className="lg:flex justify-between">
              <p> {formatDateTime(blog?.createdAt)}</p>
              <div className="flex justify-start gap-5 lg:w-1/4 lg:mt-0 mt-3">
                <div className="bg-[#1877F2] w-8 h-8 rounded-full flex justify-center items-center">
                  <FaFacebookF className="text-white text-[20px]" />
                </div>
                <div className="bg-[#F501C9] w-8 h-8 rounded-full flex justify-center items-center">
                  <FaInstagram className="text-white text-[20px]" />
                </div>
                <div className="bg-[#151515] w-8 h-8 rounded-full flex justify-center items-center">
                  <FaXTwitter className="text-white text-[20px]" />
                </div>
                <div className="bg-[#04AA6D] w-8 h-8 rounded-full flex justify-center items-center">
                  <IoMdShareAlt className="text-white text-[20px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="flex justify-center items-center">
              <img className="w-3/4 rounded" src={blog?.image} alt="" />
            </div>
            <div className="mt-5">
              <p className="text-justify leading-10">{blog?.content}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-black font-bold border-b-2 border-[#141414] w-24 pb-2">
            Read More...
          </h2>
          <div className="mt-8 space-y-5">
            <div>
              <h2 className="font-semibold text-[20px] hover:text-[#1779BA]">
                Barind Farmers: At mercy of ‘water lords’{" "}
              </h2>
              {sideData.map((item) => (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <p>{item.title.slice(0, 20)}</p>
                  <img
                    className="w-full rounded-md"
                    src="https://i.ibb.co/MkKdwGq/paddy.jpg"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div>
              <div>
                <img src={adds} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>More On {blog.category} News</h2>
        <div className="grid grid-cols-4">
          {relatedData.map((item) => (
            <div onClick={() => handleData(item)} className="space-y-5 hover:shadow-md transition duration-300 p-5">
              <div className="overflow-hidden">
                <img
                  className="rounded w-full h-[250px] cursor-pointer object-cover hover:scale-110 transition duration-500"
                  src={item.image}
                  alt=""
                />
              </div>
              <h2 className="font-bold text-[18px]">
                <div className="cursor-pointer hover:text-[#1779BA] transition duration-300">
                  {item.title}
                </div>
              </h2>
              {/* <p className="text-slate-500">{truncatedContent}</p> */}
              {/* <small className="text-slate-500">
                {item.status === "Post by owner"
                  ? "Post by owner"
                  : item.status === "Post by superadmin"
                  ? "Post by Superadmin"
                  : "Post by Admin"}
              </small> */}
              <p className="text-slate-500 text-[12px]">
                {formatDateTime(item.createdAt)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainNews;
