import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Building = () => {
  return (
    <div className="w-full bg-[#000000]  rounded-md text-white lg:h-[300px] mb-20">
      <div className="lg:flex justify-between lg:h-[300px]">
        <div className="space-y-3 p-20 lg:w-1/2 relative z-10 flex flex-col justify-center lg:items-start items-center  text-center">
          <h3 className="font-bold text-3xl">Build Web3 Apps</h3>
          <p>Deploy smart contracts and build on FuseNetwork</p>
          <button className="w-44 bg-green-500 p-2 rounded-3xl flex gap-2 justify-center items-center text-black">
            Start Building
            <BsArrowRight />
          </button>
        </div>
        <div className="lg:w-1/2 relative">
            <img className="lg:w-[400px] w-[280px] absolute lg:bottom-0 lg:right-5 right-0 -bottom-1/2" src="https://news.fuse.io/wp-content/uploads/2023/06/start-building-img.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Building;
