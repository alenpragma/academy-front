import React, { useState } from "react";
import logo from "../assets/logo/logo.svg";
import { FiMenu, FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-white z-10 lg:mx-0">
      <div className="flex justify-between items-center px-0 py-5">
        <div className="flex justify-between w-6/12">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="lg:flex hidden">
            <ul className="flex justify-center gap-5 items-center">
              <li className="hover:text-[#41ea4f] font-bold">Home</li>
              <li>News</li>
              <li>Payment</li>
              <li>Academy</li>
              <li>Docs</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <form className="flex justify-end w-4/12 p-2 relative">
            <input
              type="text"
              name=""
              id=""
              className="border border-black w-52 p-1 rounded"
              placeholder="search"
            />
            <FiSearch className="text-[20px] flex items-center justify-center absolute top-0 bottom-0 my-auto right-3 cursor-pointer text-black " />
          </form>
          <Link to="/">
            <FcGoogle className="text-2xl" />
          </Link>
        </div>
        <div
          onClick={() => setToggle((previous) => !previous)}
          className="lg:hidden  md:flex flex-col"
        >
          {toggle ? (
            <VscChromeClose className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
          <div
            className={`${
              toggle ? "scale-y-100" : "scale-y-0"
            } absolute right-0 left-0 mx-auto top-20 origin-top-right btransition-transform transformg-white duration-200 bg-white`}
          >
            <ul className="flex flex-col gap-8 pb-8 justify-center items-center w-full shadow-md">
              <li className="hover:text-[#41ea4f] font-bold">Home</li>
              <li>News</li>
              <li>Payment</li>
              <li>Academy</li>
              <li>Docs</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
