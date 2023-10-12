import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.svg";
import { FiMenu, FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function getMenu() {
      await axios
        .get(
          "https://academy-backend-95ag.onrender.com/api/v1/layouts/getnav?fbclid=IwAR3w-fa6B5ZDqBRKZFlki5SWDXcNkbgz44X2ousgiFwFvvtbqcrsRgluh4c"
        )
        .then((res) => {
          // console.log("====================================");
          setMenu(res.data);
          // console.log("====================================");
        });
    }
    getMenu();
  }, []);

  // const navItem = (
  //   <>
  //     <li className="hover:text-[#41ea4f] font-bold">
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className="hover:text-[#41ea4f] font-bold">
  //       <Link to="/">Payment</Link>
  //     </li>
  //     <li className="hover:text-[#41ea4f] font-bold">
  //       <Link to="/">Academy</Link>
  //     </li>
  //     <li className="hover:text-[#41ea4f] font-bold">
  //       <Link to="/">Docs</Link>
  //     </li>
  //   </>
  // );

  return (
    <nav className="w-full bg-white z-10 lg:mx-0 shadow">
      <div className="max-w-6xl lg:mx-auto mx-5">
        <div className="flex justify-between items-center px-0 py-5">
          <div className="flex justify-between w-6/12">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="lg:flex hidden">
              <ul className="flex justify-center gap-5 items-center">
                <li className="hover:text-[#41ea4f] font-bold">
                  <Link to="/">Home</Link>
                </li>
                {menu.slice(1, 100).map((item) => (
                  <li className="hover:text-[#41ea4f] font-bold" key={item._id}>
                    <Link to={item.name}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center w-6/12">
            <form className="flex justify-end lg:w-6/12 w-3/12 p-2 relative">
              <input
                type="text"
                name=""
                id=""
                className="lg:w-72 w-40 px-5 py-2 rounded-3xl  outline-none border"
                placeholder="search..."
              />
              <FiSearch className="text-[20px] flex items-center justify-center absolute top-0 bottom-0 my-auto right-7 cursor-pointer text-[#4ADE80] border-l-2 border-red pl-1" />
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
                <li className="hover:text-[#41ea4f] font-bold">
                  <Link to="/">Home</Link>
                </li>
                {menu.slice(1, 100).map((item) => (
                  <li className="hover:text-[#41ea4f] font-bold" key={item._id}>
                    <Link to={item.name}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
