import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="my-20 bg-slate-100 p-10 rounded">
      <div className="w-full grid lg:grid-cols-6 grid-cols-2 text-center gap-5">
        <a href="#" className="w-full flex justify-center items-center gap-2">
          <FaYoutube className="text-3xl text-black" />
          <span className="font-semibold">YouTube</span>
        </a>
        <a href="#" className="w-full flex justify-center items-center gap-2">
          <FaGithub className="text-3xl text-black" />
          <span className="font-semibold">YouTube</span>
        </a>
        <a href="#" className="w-full flex justify-center items-center gap-2">
          <FaTelegramPlane className="text-3xl text-black" />
          <span className="font-semibold">YouTube</span>
        </a>
        <a href="#" className="w-full flex justify-center items-center gap-2">
          <FaDiscord className="text-3xl text-black" />
          <span className="font-semibold">YouTube</span>
        </a>
        <a href="#" className="w-full flex justify-center items-center gap-2">
          <FaFacebook className="text-3xl text-black" />
          <span className="font-semibold">YouTube</span>
        </a>
        <a href="#" className="w-full flex justify-center items-center gap-2">
          <FaInstagram className="text-3xl text-black" />
          <span className="font-semibold">YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
