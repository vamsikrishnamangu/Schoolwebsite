import React from "react";

import Activityehead from "./Activityhead";

const Newsletter = () => {
  return (
    <>
      <div>
        <Activityehead />
      </div>
      <div>
        <h1
          className=" mt-[31px] text-center font-Roboto text-4xl font-bold "
          style={{ lineHeight: "51px" }}
        >
          Newsletter
        </h1>
      </div>
      <div className="lg:ml-[84px]">
        <div className="lg:w-[406px] lg:h-[228px]  w-[336px] h-[240px]  ml-[46px]">
          {" "}
          <img src="/image6.png" alt="images" />
        </div>
        <div className=" mb-[23px] relative bg-[#1A2338] lg:w-[407px] w-[335px] h-[304px] ml-[46px] p-[33px]  flex flex-col items-start">
          {/* Image */}
          <div className="text-white font-Roboto">
            <p className="lg:text-[20px] text-lg lg:w-[373px] lg:h-[71px] lg:mb-[91px] mb-[64px]">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id
            </p>
          </div>
          <hr className="border-t border-white w-full opacity-50" />

          {/* Text and Button */}

          <div className="flex items-center w-[373px] h-[56px]  mt-[15px] ">
            <span className="font-medium  text-white text-[18px] leading-[23px] w-[136px]">
              17 January 2023
            </span>
            <button className="flex items-center justify-center gap-2.5 lg:w-[187px] lg:h-[56px] w-[123px] h-[36px] bg-white border-[1px] border-[#1A2338] rounded-[15px] text-[#1A2338] font-medium text-[16px] leading-[18px]  m-4 py-[10px] px-[20px]">
              Download Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
