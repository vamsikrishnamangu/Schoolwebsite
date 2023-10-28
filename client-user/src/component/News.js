import React from "react";
// import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet
import { HiArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const NewsAndEvents = () => {
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
    <div className="bg-[#1A2338] rounded-md ">
      <div className="pt-[29px] pl-[84px]">
        <h1 className="lg:text-4xl text-xl ml-[20px] lg:ml-[84px] text-white font-bold font-Roboto sm:items-center">
          News and Events
        </h1>
      </div>
      <div className="flex flex-row  ">
        <div className="flex flex-col lg:flex-row rounded-md shadow-lg gap-4">
          <div className="w-[293px] h-[220px] mt-[29px]  2xl:ml-[84px] lg:ml-[34px] ml-[20px]">
            <img src="/image1.svg" alt="image1" />
          </div>
          <div className="lg:mt-[29px] ml-[20px] rounded-lg border lg:border-none border-solid pl-[18px]  border-white">
            <h1 className="text-white text-xl lg:text2xl font-semibold leading-6">
              Lorem ipsum dolor sit amet consectetur.
              <p className="mt-[8px] font-normal text-sm lg:text-md text-white">
                Aenean amet quam auctor neque pellentes Ullamcorper orci felis
                ullamcocerat ac vulputate. Non velit et
              </p>
            </h1>
            <div
              className="text-[#878787] font-normal text-sm flex items-center"
              style={{ lineHeight: "28px" }}
            >
              Read More
              <HiArrowSmRight className="ml-2" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-md shadow-lg ">
          <div className="w-[293px] h-[220px] mt-[29px] lg:ml-[84px] ml-[20px]">
            <img src="/image1.svg" alt="image2" />
          </div>
          <div className="lg:mt-[29px] ml-[20px] rounded-lg border lg:border-none border-solid pl-[18px]  border-white">
            <h1 className="text-white text-xl lg:text2xl font-semibold leading-6">
              Lorem ipsum dolor sit amet consectetur.
              <p className="mt-[8px] font-normal text-sm lg:text-md text-white">
                Aenean amet quam auctor neque pellentes Ullamcorper orci felis
                ullamcocerat ac vulputate. Non velit et
              </p>
            </h1>
            <div
              className="text-[#878787] font-normal text-sm flex items-center"
              style={{ lineHeight: "28px" }}
            >
              Read More
              <HiArrowSmRight className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Slider {...settings}>
      {renderSlide()} {/* Slide 1 */}
      {renderSlide()} {/* Slide 2 */}
      {renderSlide()} {/* Slide 3 */}
      {/* Add more slides by calling renderSlide multiple times */}
    </Slider>
  );
};

export default NewsAndEvents;
