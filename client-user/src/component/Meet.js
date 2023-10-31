import React from "react";

const Meet = () => {
  return (
    <>
      <div>
        <h1 className="ml-[40px] mt-[20px] font-bold text-lg text-[#000] lg:hidden">
          Apply for Admission
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div
          className="lg:w-[855px] 2xl:w-2/3 lg:h-[672px] w-full h-[210px] bg-cover mt-4 lg:mt-0"
          style={{ backgroundImage: "url(meetImage.svg)" }}
        ></div>

        <div className="lg:w-[723px] 2xl:w-1/2 lg:h-[672px] w-[375px] h-[310px] bg-[#1A2338]  lg:mt-0">
          <h1
            className="lg:ml-[33px] ml-16 mt-24 font-bold text-4xl text-[#fff] hidden lg:block"
            style={{ lineHeight: "46.33px" }}
          >
            Admissions for the Academic Year 2024-2025 are now open.
          </h1>
          <p className="lg:ml-[33px] ml-[27px]  mt-[25px] mr-9 lg:mt-[2rem] text-[#FFFFFF] font-normal text-sm lg:text-xl">
            Parents interested in providing their children with a balanced
            educational experience that fosters both academic and personal
            growth are invited to initiate the admissions process. There are
            multiple avenues to begin your enrollment journey:
          </p>
          <div className="flex flex-row lg:mx-2 lg:ml-12   lg:mt-[153px] mt-[20px] gap-[50px]">
            <div className="font-medium text-base text-[#1A2338] bg-[#fff] border border-white gap-2.5 rounded-lg mt-5 px-[20px] py-[12px]">
              <button>Apply Now</button>
            </div>
            <div className="font-medium text-base text-[#1A2338] bg-[#fff] border border-white gap-2.5 rounded-lg mt-5 mx-2 px-[20px] py-[12px]">
              <button>Request a call</button>
            </div>
            <div className="font-medium text-base text-[#1A2338] bg-[#fff] border border-white gap-2.5 rounded-lg mt-5 mx-2 px-[20px] py-[12px]">
              <button>Book a meet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
