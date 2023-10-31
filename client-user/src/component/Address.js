import React from "react";

const Address = () => {
  return (
    <div>
      <div className="flex-1 lg:ml-[5rem] ml-[24px]  p-4 ">
        <h1 className="lg:ml-[5rem] lg:mt-[2rem] text-[#1A2338] font-Roboto lg:text-4xl md:text-lg font-bold">
          OUR ADDRESS
        </h1>
      </div>
      <div className=" lg:ml-[5rem] bg-[#fff] flex flex-row lg:flex-row mt-4">
        <div className="flex flex-col ml-[5rem]">
          <p className="mt-[13px] lg:mt-[4rem] font-Roboto font-bold text-2xl text-[#1A2338]">
            Suchitra Campus: Playschool and <br /> Nursery to Grade 5
          </p>
          <p className="font-Roboto  mt-2 lg:mt-[10px] font-bold text-xl text-[#727272]">
            Customer Care No: <br />
            <span className="text-[#727272] text-normal">040 2786 2624</span>
          </p>
          <p className="font-Roboto mt-2   font-normal text-xl text-[#727272]">
            Phase 1, 141 6-105/1, 141, Quthbullapur Main Rd, Godavari Homes,
            <br />
            Quthbullapur, Hyderabad, Telangana 500067
          </p>
        </div>
        <div className="flex-1 p-4">
          {/* Embed your map here */}
          <div className="lg:w-[621px]   lg:h-[281px] w-[336px] h-[330px] rounded-md ">
            <img
              src="/map1.svg"
              alt="Map"
              className="w-full h-full lg:ml-[16rem]"
            />
          </div>
        </div>
      </div>

      <div className=" lg:ml-[5rem] bg-[#fff] flex flex-row lg:flex-row mt-4">
        <div className="flex flex-col ml-[5rem]">
          <p className="mt-[13px] lg:mt-[9rem] font-Roboto font-bold text-2xl text-[#1A2338]">
            Marredpally Campus: Playschool and <br />
            Nursery to Grade 5
          </p>
          <p className="font-Roboto  mt-2 lg:mt-[10px] font-bold text-xl text-[#727272]">
            Customer Care No: <br />
            <span className="text-[#727272] text-normal">
              040-27717682 , 040-66497682
            </span>
          </p>
          <p className="font-Roboto mt-2   font-normal text-xl text-[#727272]">
            10-2-202 Street No. 5, , West Marredpally, Hyderabad - 500026
          </p>
        </div>
        <div className="flex-1 p-4">
          {/* Embed your map here */}
          <div className="lg:w-[621px]   lg:h-[281px] w-[336px] h-[330px] rounded-md lg:mt-[9rem] lg:ml-[18rem] ">
            <img src="/map2.svg" alt="Map" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
