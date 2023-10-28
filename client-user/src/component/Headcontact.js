import React from "react";

const Headcontact = () => {
  return (
    <div>
      <div className="relative w-full">
        <img
          src="contactImage.svg"
          alt="images"
          className="lg:w-full lg:h-1/2 w-[453px] h-[222px] ml-[20px]"
        />
        <div className="absolute top-0 left-0 p-4">
          {/* For Desktop */}
          <p className="hidden md:block text-white font-bold lg:text-3xl text-sm lg:ml-40 lg:mt-48 mt-[89px] ml-[80px]">
            GET IN TOUCH
          </p>
          <p className="hidden md:block lg:mt-8 lg:text-6xl text-lg font-Roboto font-extrabold ml-40 text-[#FFA901]">
            Our Contact <br /> Information
          </p>

          {/* For Mobile */}
          <p className="md:hidden text-white font-bold text-sm mt-[89px] ml-[150px]">
            CONTACT US
          </p>
          <p className="md:hidden text-lg font-Roboto font-extrabold ml-40 text-[#FFA901]">
            Get in touch with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headcontact;
