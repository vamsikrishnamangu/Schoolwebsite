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
      <div className="font-roboto-sans  ml-[84px] mt-[60px]">
        <h1 className="lg:ml-[106px] lg:mt-[60px] mt-[10px] mb-[10px] text-[#1A2338] font-Roboto font-bold lg:text-4xl text-3xl leading-20">
          Campus Buzz
        </h1>
      </div>

      {/* Mobile layout with react-slick carousel */}
      <div className=" font-roboto-sans lg:ml-[106px] ml-[10px] lg:hidden">
        <Slider {...settings}>
          {[
            {
              imgSrc: "image4.svg",
              text: "Check out our newest newsletter to see all the fun Think, Say, Do activities our kids are up to! From solving cool puzzles and sharing their ideas to making awesome crafts, we're helping them learn in the best ways possible.",
            },
            {
              imgSrc: "image3.svg",
              text: "Don't miss a moment of your child's educational journey—our school calendar is your go-to guide for all upcoming events, activities, and key academic dates. Stay in the loop with PTA meetings, seasonal celebrations, and more, all designed to enrich your child's learning experience.",
            },
          ].map((item, index) => (
            <div className="relative w-[300px] h-[271px]">
              <div
                className="ml-[24px] bg-cover bg-center w-[300px] h-[271px] flex items-center justify-center"
                style={{ backgroundImage: `url(${item.imgSrc})` }}
              >
                <img
                  src={`/campus${index + 4}.png`}
                  alt={`campus${index + 4}`}
                />
              </div>
              <div className="absolute w-[529px] h-[83px] top-[305px] text-white flex items-end justify-center text-center">
                <p className="text-base leading-[26px]">{item.text}</p>
              </div>
              <div className="flex justify-center items-center gap-2.5 w-[153px] h-[26px] p-[20px] border border-[#1A2338] bg-white rounded-xl absolute left-1/2 transform -translate-x-1/2 bottom-[-5px]">
                <button className="text-[#1A2338] text-sm font-medium">
                  {index === 0
                    ? "Check the latest newsletter"
                    : "Download Calendar"}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* The existing layout for desktop screens */}
      <div className="font-roboto-sans hidden lg:flex 2xl:ml-0 lg:ml-[84px] lg:justify-around flex flex-row gap-14 mt-10">
        {[
          {
            imgSrc: "image4.svg",
            text: "Check out our newest newsletter to see all the fun Think, Say, Do activities our kids are up to! From solving cool puzzles and sharing their ideas to making awesome crafts, we're helping them learn in the best ways possible.",
          },
          {
            imgSrc: "image3.svg",
            text: "Don't miss a moment of your child's educational journey—our school calendar is your go-to guide for all upcoming events, activities, and key academic dates. Stay in the loop with PTA meetings, seasonal celebrations, and more, all designed to enrich your child's learning experience.",
          },
        ].map((item, index) => (
          <div className="relative w-[606px] h-[455px]">
            <div
              className="absolute rounded-2xl w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${item.imgSrc})` }}
            >
              <img src={`/campus${index + 4}.png`} alt={`campus${index + 4}`} />
            </div>
            <div className="absolute w-[529px] h-[83px] left-[39px] top-[305px] text-white flex items-end justify-center text-center">
              <p className="text-base leading-[26px]">{item.text}</p>
            </div>
            <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 py-3 px-5 bg-white border border-[#1A2338] rounded-lg flex items-center justify-center">
              <button className="text-[#1A2338] text-sm font-medium">
                {index === 0
                  ? "Check the latest newsletter"
                  : "Download Calendar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Campus;
