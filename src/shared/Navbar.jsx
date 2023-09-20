import React, { useState } from "react";
import logo from "../assets/logo/logo.svg";
import { FiMenu, FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItem = (
    <>
      <li className="hover:text-[#41ea4f] font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#41ea4f] font-bold">
        <Link to="/">Payment</Link>
      </li>
      <li className="hover:text-[#41ea4f] font-bold">
        <Link to="/">Academy</Link>
      </li>
      <li className="hover:text-[#41ea4f] font-bold">
        <Link to="/">Docs</Link>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white z-10 lg:mx-0">
      <div className="flex justify-between items-center px-0 py-5">
        <div className="flex justify-between w-6/12">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="lg:flex hidden">
            <ul className="flex justify-center gap-5 items-center">
              {navItem}
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <form className="flex justify-end lg:w-6/12 w-6/12 p-2 relative">
            <input
              type="text"
              name=""
              id=""
              className="border border-black w-52 px-5 py-2 rounded-3xl"
              placeholder="search"
            />
            <FiSearch className="text-[20px] flex items-center justify-center absolute top-0 bottom-0 my-auto right-5 cursor-pointer text-black " />
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
              {navItem}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
