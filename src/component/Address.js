import React from "react";

const Address = () => {
  return (
    <div>
      <div className="bg-[#fff] flex flex-col lg:flex-row mt-8">
        <div className="flex-1 lg:ml-[24px] ml-[24px]  p-4 ">
          <h1 className="text-[#1A2338] font-Roboto lg:text-4xl md:text-lg font-bold">
            OUR ADDRESS
          </h1>
          <p className="mt-[13px] lg:mt-[20px] font-Roboto font-normal text-lg text-black">
            Customer Care No: <br />
            <span className="font-bold text-black">8886911466 </span>
          </p>
          <p className="font-Roboto  mt-2 lg:mt-[10px] font-normal text-xl text-black">
            9W63+X96, Adhalia, nearby Niali Road, Phulnakhara, Odisha 754001
          </p>
          <p className="font-Roboto mt-2 lg:mt-[10px] font-normal text-lg text-black">
            Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
            nunc posuere id sapien porta purus. Lorem ipsum dolor sit amet
            consectetur. Consectetur mi vestibulum nunc posu...
          </p>
        </div>
        <div className="flex-1 p-4">
          {/* Embed your map here */}
          <div className="lg:w-[521px] xl:w-full  lg:h-[500px] w-[336px] h-[330px] bg-gray-300">
            <img src="/map.png" alt="Map" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
