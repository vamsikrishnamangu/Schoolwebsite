import React from "react";
import Publish from "../Buttons/publishButton";

import Placeholder from "./placeholder";
import Heading from "./Heading";

const Home = () => {
  return (
    <div className="bg-[#F1F5F9] bg-cover w-[88vw] h-[100vh]">
      <div className="flex flex-row font-roboto-sans">
        <div className="flex flex-col">
          <h1
            className="lg:ml-[40px] lg:mt-[24px] 2xl:ml-[90px] 2xl:mt-[48px] font-Roboto font-semibold lg:text-2xl 2xl:text-4xl text-[#1A2338]"
            style={{ lineHeight: "78px" }}
          >
            Home
          </h1>
          <p className="font-bold lg:text-lg 2xl:text-xl text-sm 2xl:ml-[90px] lg:ml-[40px] text-[#1A2338B2] ">
            pop-up
          </p>
        </div>
        <div className="2xl:ml-[300px] lg:ml-[130px] ">
          <Publish />
        </div>
      </div>
      <Heading />
      <Placeholder />
    </div>
  );
};

export default Home;
