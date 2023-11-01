import React from "react";
// Import the AOS stylesheet

const Body = () => {
  return (
    <>
      <div
        className="lg:w-full lg:h-auto flex  w-[24rem] h-[12rem]"
        style={{
          backgroundImage: 'url("./image.svg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col text-center lg:mt-[21rem]   lg:ml-[17rem]">
          <div className="2xl:w-[900px] 2xl:h-[208px] bg-[#1A233880] rounded-2xl 2xl:ml-[20rem] ">
            <p className="lg:pl-[16rem] lg:pr-[16rem] text-[#FFFFFF] font-roboto-sans  lg:text-2xl lg:mt-[1.6rem]  text-xl font-bold  ">
              ST MICHAEL’S SCHOOL
            </p>
            <div className="mt-[1.5rem] mb-[1.9rem]">
              <p className="lg:text-5xl text-base text-[#FFFFFF] font-roboto-sans font-extrabold">
                Equipping
                <span
                  className="lg:text-5xl text-base   text-[#FFA901]  font-roboto-sans font-font-bold lg:leading-10"
                  style={{ lineHeight: "55px" }}
                >
                  Young Leaders
                </span>
                With <br />
                Core Values and Future Ready Skills.
              </p>
            </div>
          </div>
          <div className="2xl:mb-[8rem] lg:mt-[1.8rem] ">
            <a href="/Admissions">
              <button className="gap-2.5 font-medium text-center font-roboto-sans  leading-4 text-base bg-[#fff] lg:py-4 lg:px-10 2xl:ml-[18rem] py-[18px]  px-[20px]  rounded-lg text-[#1A2338]">
                Know more
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
