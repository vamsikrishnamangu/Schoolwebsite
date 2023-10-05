import React from "react";
import NewsAndEvents from "./News";
// import Activitie0 from "./activitie0";

const Calendaractivity = () => {
  return (
    <div>
      <div>
        <NewsAndEvents />
      </div>
      <div className="mt-[107px] relative">
        <div className="flex flex-col lg:flex-row items-center lg:w-full lg:h-[321px] w-[421px] h-[336px] bg-[#1A2338]">
          {/* Image */}
          <div className="lg:ml-[308px] ml-[20px] lg:mr-[43px] mr-[60px] relative -top-16">
            <img
              src="/image3.png"
              alt="images"
              className="lg:w-[370px] lg:h-[279px] w-[295px] h-[224px] flex-shrink-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col  lg:ml-10 ml-[63px]">
            <h1 className="text-white font-semibold lg:text-4xl  text-lg leading-[24px]">
              Yearly Calendar
            </h1>
            <span className="mt-4 text-white font-Roboto lg:text-sm text-xs">
              consectetur. Aenean amet quam auctor neque pellentes Ullamcorper
              orci felis
            </span>

            {/* Download Button */}
            <button className="flex mt-4 items-center justify-center w-[210px] h-[50px] border-[#1A2338] border-solid border rounded-md bg-white gap-2.5">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[107px] relative">
        <div className="lg:flex flex-row-reverse  lg:w-full lg:h-[321px] w-[421px] h-[336px] bg-[#1A2338]">
          {/* Image */}
          <div className="lg:ml-[308px] ml-[20px] lg:mr-[43px] mr-[60px] relative -top-16">
            <img
              src="/image3.png"
              alt="images"
              className="lg:w-[370px] lg:h-[279px] w-[295px] h-[224px] flex-shrink-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col  lg:ml-10 ml-[63px]">
            <h1 className="text-white font-semibold lg:text-4xl lg:mt-[40px] text-lg leading-[24px]">
              Our Monthly Newsletters
            </h1>
            <span className="mt-4 text-white font-Roboto lg:text-sm text-xs">
              consectetur. Aenean amet quam auctor neque pellentes Ullamcorper
              orci felis
            </span>

            {/* Download Button */}
            <button className="flex mt-4 items-center justify-center w-[210px] h-[50px] border-[#1A2338] border-solid border rounded-md bg-white gap-2.5">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendaractivity;
