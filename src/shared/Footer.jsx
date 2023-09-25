import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-6xl lg:mx-auto md:mx-5 mx-5 ">
      <div className="lg:grid grid-cols-4 p-5">
        <div>
          <div className="mb-7">
            <h2 className="font-bold">Getting Start</h2>
          </div>
          <div>
            <ul className="flex flex-col justify-center space-y-4">
              <Link to="/" className="text-slate-600 hover:text-slate-400">Fuse Network</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Mobile Stack</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Fuse Charge</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Voltage Finance</Link>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-7">
            <h2 className="font-bold">Under The Hood</h2>
          </div>
          <div>
            <ul className="flex flex-col justify-center space-y-4">
              <Link to="/" className="text-slate-600 hover:text-slate-400">Explorer</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Documentation</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Fuse Staking</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Governance</Link>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-7">
            <h2 className="font-bold">Under The Hood</h2>
          </div>
          <div>
            <ul className="flex flex-col justify-center space-y-4">
              <Link to="/" className="text-slate-600 hover:text-slate-400">Privacy Policy</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Brand Kit</Link>
              <Link to="/" className="text-slate-600 hover:text-slate-400">Jobs</Link>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-7">
            <h2 className="font-bold">Subscribe to our newsletter</h2>
          </div>
          <div>
            <ul className="flex flex-col justify-center space-y-4">
              <Link to="/" className="text-slate-600 hover:text-slate-400">Get the latest news directly to your inbox</Link>
              <form>
              <Link to="/" className="flex flex-col justify-start gap-3">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" className="py-2 px-4 w-full bg-slate-100 outline-none border rounded-3xl border-black"/>
                <input type="submit" value="Submit" className="bg-[#FF7A59] w-1/2 rounded-3xl p-2 font-semibold hover:text-white"/>
              </Link>
              </form>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h2>© 2023 Fuse. All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
