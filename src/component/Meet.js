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
          className="lg:w-2/3 lg:h-[672px] w-full h-[210px] bg-cover mt-4 lg:mt-0"
          style={{ backgroundImage: "url(footer.png)" }}
        ></div>

        <div className="lg:w-1/2 lg:h-[672px] w-[375px] h-[310px] bg-[#1A2338]  lg:mt-0">
          <h1
            className="ml-16 mt-24 font-bold text-4xl text-[#fff] hidden lg:block"
            style={{ lineHeight: "78.33px" }}
          >
            Apply for Admission
          </h1>
          <p className="lg:ml-16 ml-[27px]  mt-[25px] mr-9 lg:mt-0.5 text-[#FFFFFF] font-normal text-sm lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Quis sit dui diam purus
            tellus vestibulum. Lorem est tortor nibh maecenas quis faucibus
            facilisi. Odio nec eget turpis amet aliquam aliquam eu pharetra. Id
            sit interdum nulla euismod enim. Faucibus aenean condimentum
          </p>
          <div className="flex flex-row justify-center lg:mx-2 lg:py-2 lg:px-5 py-1 lg:m-4  lg:justify-start lg:ml-12   lg:mt-[180px] mt-[20px]">
            <div className="font-medium text-base text-[#1A2338] bg-[#fff] border border-white gap-2.5 rounded-lg mt-5 py-2 px-4 ">
              <button>Book a Meet</button>
            </div>
            <div className="font-medium text-base text-[#1A2338] bg-[#fff] border border-white gap-2.5 rounded-lg mt-5 mx-2 py-2 px-5">
              <button>Book Campus Visit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
