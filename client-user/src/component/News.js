import React, { useState } from "react";
// import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet
import { HiArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const NewsAndEvents = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto play
    autoplaySpeed: 5000, // Slide every 5 seconds
  };
  const renderSlide = (imgSrc, altText) => (
    <div className="bg-[#1A2338] font-roboto-sans">
      <div>
        <h1 className="lg:text-4xl text-xl ml-[2rem] 2xl:ml-[16rem] lg:ml-[2rem] lg:mt-[1.5rem] mt-[1rem] text-white font-bold  sm:items-center">
          News and Events
        </h1>
      </div>
      <div className="flex flex-row  ">
        <div className="flex flex-col lg:mb-[3rem] lg:flex-row ">
          <div className="w-[18rem] h-[15rem] mt-[29px]  2xl:ml-[16rem]  ml-[1.5rem] lg:line-height: 1.75rem">
            <img src="/image1.svg" alt="image1" />
          </div>
          <div className="lg:w-[17rem] lg:h-[13rem] lg:mt-[29px] ml-[20px] rounded-lg border lg:border-none border-solid pl-[18px]  border-white">
            <h1 className="text-white text-xl lg:text2xl font-semibold leading-6">
              An exciting visit to the supermarket
              <p className="mt-[8px] font-normal text-sm lg:text-md text-white">
                In a delightful twist to regular classroom learning, our Nursery
                students embarked on a fascinating field trip to a local
                supermarket. The experience was both educational and interactive
              </p>
            </h1>
            <div
              className="cursor-pointer text-[#878787] font-normal text-sm flex items-center group"
              style={{ lineHeight: "28px" }}
              onClick={() => setModalOpen(true)}
            >
              <span className="border-b-2 border-[#878787]">Read More</span>
              <HiArrowSmRight className="ml-2 w-6 h-8" />{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-md shadow-lg">
          <div className="w-[293px] h-[220px] mt-[29px] lg:ml-[84px] ml-[20px]">
            <img src="/image1.svg" alt="image2" />
          </div>
          <div className="lg:mt-[29px] 2xl:ml-[2rem] lg:ml-[1rem] ml-[20px] rounded-lg border lg:border-none border-solid pl-[18px]  border-white lg:w-[17rem] lg:h-[13rem]">
            <h1 className="text-white text-xl lg:text2xl font-semibold leading-6">
              Show and Tell.
              <p className="mt-[8px] font-normal text-sm lg:text-md text-white">
                In a much-anticipated classroom event titled "Show and Tell,"
                our Grade 1 students had the opportunity to present a cherished
                item or topic of interest to their classmates.
              </p>
            </h1>
            <div
              className="cursor-pointer text-[#878787] font-normal text-sm flex items-center group"
              style={{ lineHeight: "28px" }}
              onClick={() => setModalOpen(true)}
            >
              <span className="border-b-2 border-[#878787]">Read More</span>
              <HiArrowSmRight className="ml-2 w-6 h-8" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Slider {...settings}>
        {renderSlide()} {/* Slide 1 */}
        {renderSlide()} {/* Slide 2 */}
        {renderSlide()} {/* Slide 3 */}
        {/* Add more slides by calling renderSlide multiple times */}
      </Slider>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white rounded-lg p-5 w-[1187px] h-[600px]"
            style={{ top: "671px", left: "127px", borderRadius: "16px" }}
          >
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    className="w-[12rem] h-[10rem] ml-[4rem] mt-[3.5rem]"
                    src="/image1.svg"
                    alt="images"
                  />
                </div>
                <div>
                  <h1
                    className=" ml-[4rem] mt-[3.8rem] font-bold text-6xl text-[#1A2338]"
                    style={{ lineHeight: "75px" }}
                  >
                    An exciting visit to the supermarket
                  </h1>
                </div>
              </div>
              <div>
                <p
                  className=" ml-[4.5rem] mt-[2.9rem] font-normal text-2xl text-[#1A2338]"
                  style={{ lineHeight: "39px" }}
                >
                  In a delightful twist to regular classroom learning, our
                  Nursery students embarked on a fascinating field trip to a
                  local supermarket. The experience was both educational and
                  interactiveIn a delightful twist to regular classroom
                  learning, our Nursery students embarked on a fascinating field
                  trip to a local supermarket. The experience was both
                  educational and interactive
                </p>
              </div>
            </div>
            <button
              className=" mt-[61px] mb-[48px]  px-[50px] py-[10px] ml-[29rem] rounded-xl bg-[#1A2338] text-white "
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsAndEvents;
