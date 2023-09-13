import React from "react";
import image from "../../assets/image/brekingImage.png";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="lg:flex gap-10 justify-center items-center ">
        <div className="w-1/2 leading-10 space-y-3">
            <h2 className="bg-green-400 w-16 rounded-full text-slate-600 font-semibold leading-none p-3">
                News
            </h2>
          <h2 className="text-3xl font-bold">
            Mirakle DEX IDO on Voltage Launchpad: Introducing Perpetuals Trading
            on Fuse
          </h2>
          <p className="text-[18px] text-slate-500">
            Join the $50,000 Airdrop Opportunity and IDO on Voltage Finance
          </p>
          <p className="text-slate-500 text-[12px]">September 11, 2023</p>
        </div>
        <div className="w-1/2">
          <img className="rounded" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
