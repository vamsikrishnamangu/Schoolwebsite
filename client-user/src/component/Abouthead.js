import React from "react";

const Abouthead = () => {
  return (
    <>
      <div>
        <div className="relative w-full">
          <img
            src="/Aboutimage.svg"
            alt="images"
            className="lg:w-full lg:h-1/2 w-[453px] h-[222px]"
          />
          <div className="absolute top-0 left-0 p-4 ">
            <div className=" 2xl:w-full 2xl:h-[14rem] 2xl:mt-[42rem] bg-[#1A233880] rounded-2xl 2xl:ml-[6rem]">
              <p className=" pt-4 text-white font-bold lg:text-3xl text-sm lg:ml-40 lg:mt-48 mt-[89px] ml-[80px]">
                GOVERNANCE & LEADERSHIP
              </p>
              <p className="lg:mt-4 lg:text-6xl text-lg font-Roboto font-extrabold ml-40 text-[#FFA901]">
                About us
              </p>
              <p
                className="font-medium text-xl text-white ml-[8rem] mb-[8rem] mt-4"
                style={{}}
              >
                At St. Michael's School, we are driven by a steadfast commitment
                to nurturing 21st-century learners through practical education
                and a deep-rooted set of core values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouthead;
