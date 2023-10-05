import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Life = () => {
  useEffect(() => {
    AOS.init({
      // You can also add some settings here if needed
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <div className="ml-[84px] lg:mt-[24px] mt-[30px]">
        <h1 className="lg:ml-[112px] font-Roboto font-bold lg:text-4xl text-2xl ">
          Life at St. Michael’s
        </h1>
      </div>
      <div className=" lg:ml-[84px] ml-[24px] flex flex-col sm:flex-row lg:justify-around">
        {/* content */}
        <div className="py-6 px-5 w-72 h-96 mt-[17px] ml-[24px] rounded-2xl bg-[#1A2338] text-white flex flex-col items-center gap-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150">
          {/* Image */}
          <img src="/Group3.png" alt="Group3" className="w-20 h-20 mb-3" />

          {/* Title */}
          <h2 className="font-bold text-xl ">Our Guiding Principles</h2>
          <div className="w-60  border border-1px border-white bg-white"></div>

          {/* Description */}
          <p className="text-sm mb-3 w-4/5 text-left">
            Lorem ipsum dolor sit amet consectetur. Aenean amet quam auctor
            neque pellentes Ullamcorper orci felis ucerat ac vulputate.
          </p>

          {/* Learn More Button */}

          <button className="font-medium text-center leading-4 text-base bg-white py-3 lg:mb-4 px-5 rounded-lg text-[#1A2338] mt-auto">
            Learn More
          </button>
        </div>
        <div className="  py-6 px-5 w-72 h-96 mt-[17px] ml-[24px] rounded-2xl bg-[#1A2338] text-white flex flex-col items-center gap-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150">
          {/* Image */}
          <img src="/Group4.png" alt="Group3" className="w-20 h-20 mb-3" />

          {/* Title */}
          <h2 className="font-bold text-xl ">
            Our Unique Teaching Methodology
          </h2>
          <div className="w-60  border border-1px border-white bg-white"></div>

          {/* Description */}
          <p className="text-sm mb-3 w-4/5 text-left">
            Lorem ipsum dolor sit amet consectetur. Aenean amet quam auctor
            neque pellentes Ullamcorper orci felis ucerat ac vulputate.
          </p>

          {/* Learn More Button */}
          <button className="font-medium text-center leading-4 text-base bg-white py-3 mb-4 px-5 rounded-lg text-[#1A2338] mt-auto">
            Learn More
          </button>
        </div>
        <div className="py-6 px-5 w-72 h-96 mt-[17px] ml-[24px] rounded-2xl bg-[#1A2338] text-white flex flex-col items-center gap-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150">
          {/* Image */}
          <img src="/Group5.png" alt="Group3" className="w-15 h-15 mb-3" />

          {/* Title */}
          <h2 className="font-bold text-xl ">Inclusive Education</h2>
          <div className="w-60 border border-1px border-white bg-white"></div>

          {/* Description */}
          <p className="text-sm mb-3 w-4/5 text-left">
            Lorem ipsum dolor sit amet consectetur. Aenean amet quam auctor
            neque pellentes Ullamcorper orci felis ucerat ac vulputate.
          </p>

          {/* Learn More Button */}
          <button className="font-medium text-center leading-4 text-base bg-white py-3 mb-4 px-5 rounded-lg text-[#1A2338] mt-auto">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Life;
