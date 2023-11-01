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
        <div className="font-roboto-sans flex flex-col lg:flex-row items-center lg:w-full lg:h-[321px] w-[421px] h-[336px] bg-[#1A2338]">
          {/* Image */}
          <div className="lg:ml-[17rem] ml-[20px] relative -top-16">
            <img
              src="/image3.svg"
              alt="images"
              className="lg:w-[370px] lg:h-[279px] w-[295px] h-[224px] flex-shrink-0"
            />
          </div>

          <div className="flex flex-col  lg:ml-10 ml-[63px]">
            <h1 className="text-white font-semibold lg:text-4xl  text-lg leading-[24px]">
              Yearly Calendar
            </h1>
            <span className="mt-4 text-white font-roboto-sans font-normal lg:text-2xl text-lg">
              Download our yearly calendar by clicking the below button.
            </span>

            <button className="flex mt-4 items-center justify-center w-[210px] h-[50px] border-[#1A2338] border-solid border rounded-md bg-white gap-2.5  txt-xl font-normal text-[#1A2338]">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="font-roboto-sans mt-[107px] relative">
        <div className="lg:flex flex-row-reverse  lg:w-full lg:h-[321px] w-[421px] h-[336px] bg-[#1A2338]">
          {/* Image */}
          <div className="lg:ml-[308px] ml-[20px] lg:mr-[14rem] mr-[60px] relative -top-16">
            <img
              src="/image4.svg"
              alt="images"
              className="lg:w-[370px] lg:h-[279px] w-[295px] h-[224px] flex-shrink-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col  lg:ml-0 ml-[20px]  mr-[60px] relative ">
            <h1 className="text-white font-semibold lg:text-4xl lg:mt-[40px] text-lg leading-[24px]">
              Our Monthly Newsletters
            </h1>
            <span className="mt-4 text-white font-roboto-sans font-normal lg:text-2xl text-lg">
              Checkout our monthly newsletters by clicking on the links below
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
