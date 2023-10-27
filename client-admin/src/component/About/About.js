import React from "react";
import Publish from "../Buttons/publishButton";
import ImageUpload from "./imageUpload";
// import SaveButton from "../Buttons/saveButton";
const About = () => {
  return (
    <>
      <div className="bg-[#F1F5F9] bg-cover w-[88vw] h-[100vh]">
        <div className="flex flex-row">
          <h1
            className="lg:ml-[40px] lg:mt-[24px] 2xl:ml-[90px] 2xl:mt-[48px] font-Roboto font-semibold lg:text-lg 2xl:text-4xl text-[#1A2338]"
            style={{ lineHeight: "78px" }}
          >
            About Us
          </h1>
          <div className="lg:ml-[40px]">
            <Publish />
          </div>
        </div>
        <div className=" flex flex-col  2xl:w-[656px] 2xl:h-[453px] lg:w-[600px] lg:h-[400px] rounded-3xl 2xl:mt-[34px] lg:mt-[24px] bg-[#FFFFFF] 2xl:ml-[90px] lg:ml-[50px] mr-[32px] relative">
          <h1 className="mb-[13px] ml-[30px] pt-[26px] font-bold text-sm text-left text-[#1A233899]">
            Photo
          </h1>
          <ImageUpload />
        </div>
      </div>
    </>
  );
};

export default About;
