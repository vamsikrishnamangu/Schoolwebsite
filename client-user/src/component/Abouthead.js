import React from "react";

const Abouthead = () => {
  return (
    <>
      <div>
        <div className="relative w-full">
          <img
            src="/image.png"
            alt="images"
            className="lg:w-full lg:h-1/2 w-[453px] h-[222px]"
          />
          <div className="absolute top-0 left-0 p-4">
            <p className="text-white font-bold lg:text-3xl text-sm lg:ml-40 lg:mt-48 mt-[89px] ml-[80px]">
              GOVERNANCE & LEADERSHIP
            </p>
            <p className="lg:mt-8 lg:text-6xl text-lg font-Roboto font-extrabold ml-40 text-[#FFA901]">
              About us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouthead;
