import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Campus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="ml-[84px] mt-[60px]">
        <h1 className="lg:ml-[96px] lg:mt-[60px] mt-[10px] mb-[10px] text-[#1A2338] font-Roboto font-bold lg:text-4xl text-3xl leading-20">
          Campus Buzz
        </h1>
      </div>

      {/* Mobile layout with react-slick carousel */}
      <div className="lg:ml-[84px] ml-[10px] lg:hidden">
        <Slider {...settings}>
          {["image3.svg", "image4.svg"].map((image, index) => (
            <div className="relative w-[300px] h-[271px]">
              <div
                className=" ml-[24px] bg-cover bg-center w-[300px] h-[271px] flex items-center justify-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <img
                  src={`/campus${index + 4}.svg`}
                  alt={`campus${index + 4}`}
                />
              </div>
              <div className="absolute w-[529px] h-[83px]  top-[305px] text-white flex items-end justify-center text-center">
                <p className="text-base leading-[26px]">
                  Lorem ipsum dolor sit amet consectetur. Aenean amet quam
                  auctor neque pellentes Ullamcorper orci felis ullamcocerat ac
                  vulputate.
                </p>
              </div>
              <div className="flex justify-center items-center gap-2.5 w-[153px] h-[26px] p-[20px] border border-[#1A2338] bg-white rounded-xl absolute left-1/2 transform -translate-x-1/2 bottom-[-5px]">
                <button className="text-[#1A2338] text-sm font-medium">
                  {index === 0
                    ? "Check the latest newsletter"
                    : "Download Calender"}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* The existing layout for desktop screens */}
      <div className="hidden lg:flex ml-[84px] lg:justify-around flex flex-row gap-14 mt-10">
        {["image3.svg", "image4.svg"].map((image, index) => (
          <div className="relative w-[606px] h-[455px]">
            <div
              className="absolute w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <img src={`/campus${index + 4}.png`} alt={`campus${index + 4}`} />
            </div>
            <div className="absolute w-[529px] h-[83px] left-[39px] top-[305px] text-white flex items-end justify-center text-center">
              <p className="text-base leading-[26px]">
                Lorem ipsum dolor sit amet consectetur. Aenean amet quam auctor
                neque pellentes Ullamcorper orci felis ullamcocerat ac
                vulputate.
              </p>
            </div>
            <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 py-3 px-5 bg-white border border-[#1A2338] rounded-lg flex items-center justify-center">
              <button className="text-[#1A2338] text-sm font-medium">
                {index === 0
                  ? "Check the latest newsletter"
                  : "Download Calender"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Campus;
