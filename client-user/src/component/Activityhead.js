import React from "react";

const Activityehead = () => {
  return (
    <div>
      <img
        src="/ActivityImage.svg"
        alt="images"
        className="lg:w-full lg:h-1/2 w-[453px] h-[222px]"
      />
      <div className="absolute top-0 ">
        <div className="font-roboto-sans bg-[#1A233880] rounded-2xl 2xl:mt-[52rem] 2xl:ml-[2.6rem] ">
          <p className=" pt-4 text-white font-bold lg:text-3xl text-sm lg:ml-40 lg:mt-48 mt-[89px] ml-[80px]">
            ENROLL AT ST. MICHAEL’S
          </p>
          <p className=" pb-4 lg:mt-8 lg:text-6xl  text-lg  font-Roboto font-extrabold ml-24 text-[#FFA901]">
            Our Activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activityehead;
