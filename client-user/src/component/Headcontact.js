import React from "react";

const Headcontact = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src="contactImage.svg"
          alt="images"
          className="lg:w-full lg:h-1/2 w-[453px] h-[222px] ml-[20px]"
        />
        <div className="font-[Roboto] absolute top-0 ">
          <div className="bg-[#1A233880] rounded-2xl 2xl:mt-[44rem] 2xl:ml-[2.6rem] ">
            <p className=" pt-4 text-white font-bold lg:text-3xl text-sm lg:ml-40 lg:mt-48 mt-[89px] ml-[80px]">
              GET IN TOUCH
            </p>
            <p className=" pb-6 px-4 lg:mt-8 lg:text-6xl  text-lg  font-Roboto font-extrabold ml-24 text-[#FFA901]">
              Our Contact Information
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headcontact;
