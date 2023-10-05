import React from "react";

const Guiding = () => {
  return (
    <div>
      <div className="relative lg:w-full lg:h-[227px] w-[390px] h-[116px] bg-[#1A2338] flex items-center justify-center">
        <p
          className="text-[#FFF] font-Inter italic font-normal text-2xl"
          style={{ lineHeight: "128%" }}
        >
          “Our vision..................................”
        </p>
      </div>
      <div className="bg-[#fff] lg:mt-[54px] lg:ml-[84px] hidden lg:block">
        <h1 className="text-[#1A2338] font-Roboto text-3xl font-bold">
          Life at St. Michael’s
        </h1>
      </div>

      <div className="relative w-full h-auto">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center ">
          {/* Text content for Section 1 */}
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="lg:mt-[115px] mt-[39px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Guiding Principles
            </h1>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-xl text-sm text-black">
              Lorem ipsum dolor sit amen porta
            </p>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id sapien porta purus. Lorem
            </p>
            <div className="mb-4 mt-[17px] lg:mt-[30px]   lg:py-[10px] lg:px-[20px]  px-[4px] py-[8px] w-[104px] lg:w-[144px]   border-[1px] border-solid border-[#1A2338] rounded-lg justify-center items-center  bg-[#FFF]">
              <button className="font-Roboto font-medium lg:text-md text-xs text-[#1A2338] ml-4 lg:text-center">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/image6.png"
              alt="Images"
              className="lg:w-[634px] lg:h-[450px] w-[390px] h-[231px] mt-[23px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-between items-center mt-8">
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="lg:mt-[115px] mt-[24px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Unique Teaching Methodology
            </h1>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amen porta
            </p>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id sapien porta purus. Lorem
            </p>
            {/* <div className="items-left mt-[30px]  w-[187px] h-[56px] flex  justify-center border-[2px] border-solid border-[#1A2338] rounded-md">
              <button className="font-Roboto font-medium text-md text-[#1A2338]">
                Learn More
              </button>
            </div> */}
          </div>

          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/image6.png"
              alt="Images"
              className="lg:w-[634px] lg:ml-[84px] lg:h-[450px] w-[390px] h-[231px] mt-[23px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center">
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="lg:mt-[115px] mt-[39px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Inclusive Education
            </h1>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amen porta
            </p>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id sapien porta purus. Lorem
            </p>
            {/* <div className="items-left mt-[30px]  w-[187px] h-[56px] flex  justify-center border-[2px] border-solid border-[#1A2338] rounded-md">
              <button className="font-Roboto font-medium text-md text-[#1A2338]">
                Learn More
              </button>
            </div> */}
          </div>

          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/image6.png"
              alt="Images"
              className="lg:w-[634px] lg:h-[450px] w-[390px] h-[231px] mt-[23px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guiding;
