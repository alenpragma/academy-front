import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";

const MainNews = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <section className="max-w-6xl lg:mx-auto mt-10 mb-20 mx-5">
      <div className="lg:flex gap-8">
        <div className="lg:w-3/4">
          <div className="space-y-5">
            <h2 className="text-[#1779BA] font-bold border-b-2 border-[#1779BA] w-24 pb-2">
              Commiunity
            </h2>
            <h2 className="font-semibold text-4xl">
              Barind Farmers: At mercy of ‘water lords’{" "}
            </h2>
            <p>Dhaka, Bangladesh</p>
            <div className="lg:flex justify-between">
              <p>Tue Sep 26, 2023 12:00 AM</p>
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
              <img
                className="w-3/4 rounded"
                src="https://i.ibb.co/MkKdwGq/paddy.jpg"
                alt=""
              />
            </div>
            <div className="mt-5">
              <p className="text-justify leading-10">
                On April 9, Mukul Soren, a Santal farmer in Rajshahi, drank
                pesticide in a suicide attempt over not getting irrigation water
                from the same deep tubewell that allegedly led to the suicide of
                two farmers, also Santals, last year. The Barind region, known
                as the rice bowl of Bangladesh, faces a great catastrophe with
                its groundwater levels depleting fast. In this water-stressed
                region, irrigation tubewells have now become a tool for the
                people with political clout to exploit farmers. Last year,
                Abhinath Mardi, 36, and his cousin Robi Mardi, 27, died by
                suicide in Godagari of Rajshahi allegedly after the local
                tubewell operator refused them the irrigation water they were
                entitled to, according to family members and case documents.
                After public outcries, police arrested and pressed charges
                against Shakhawat Hossain, the tubewell operator. The Barind
                Multipurpose Development Authority (BMDA), the government agency
                responsible for overseeing irrigation in the region, replaced
                Shakhawat with a new operator, Hashem Ali Babu. But there seems
                to be no respite from the exploitation by the operators,
                appointed by the BMDA.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-[#1779BA] font-bold border-b-2 border-[#1779BA] w-24 pb-2">
            Read More...
          </h2>
          <div className="mt-8">
            <h2 className="font-semibold text-[20px] hover:text-[#1779BA]">
              Barind Farmers: At mercy of ‘water lords’{" "}
            </h2>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <p>
                On April 9, Mukul Soren, a Santal farmer in Rajshahi, drank
                ....
              </p>
              <img className="w-full rounded-md" src="https://i.ibb.co/MkKdwGq/paddy.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
