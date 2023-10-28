import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet
import { HiX } from "react-icons/hi";

const Body = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      // You can also add some settings here if needed
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <div
        className="lg:w-screen  lg:h-screen flex  w-[390px] h-[206px]"
        style={{
          backgroundImage: 'url("./image.svg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="text-center lg:items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <p className=" text-[#FFFFFF] font-Roboto  lg:text-xl lg:ml-[90px] 2xl:ml-[800px] ml-[129px] text-sm font-bold lg:mt-[400px] mt-[92px] ">
            ST MICHAEL’S SCHOOL
          </p>
          <div className="ml-[63px] 2xl:ml-[700px] lg:ml-[150px] ">
            <p className="lg:text-5xl text-base text-[#FFFFFF] lg:mt-[16px] mt-[7px] font-Roboto font-extrabold">
              Nurturing{" "}
              <span className="lg:text-5xl text-base   text-[#FFA901]  font-Roboto font-font-bold lg:leading-10">
                Tomorrow’s Leaders
              </span>
              <br /> with Values and Innovation
            </p>
          </div>
          <div className="mb-[20px] ">
            <button
              className="gap-2.5 font-medium text-center   leading-4 text-base bg-[#fff] lg:py-4 lg:px-6 py-[10px]  px-[16px] lg:mt-20 lg:ml-[625px] ml-[70px] rounded-lg text-[#1A2338]"
              onClick={() => setModalOpen(true)}
            >
              Learn More
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white py-8  px-10 srounded-lg relative  max-w-xl">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-3 top-3"
              >
                <HiX size={24} />
              </button>

              <p>Loreum ipsum...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
