import React from "react";

const Classroom = () => {
  return (
    <>
      <div className="mt-20 ml-20">
        <h1 className="font-bold lg:text-4xl text-3xl lg:ml-[84px] ">
          Beyond Classroom
        </h1>
      </div>
      <div className="flex flex-row lg:justify-around gap-9 lg:ml-30 ml-[42px]  mt-10 items-center pt-3 pb-3 pl-4 pr-1 rounded-sm bg-white shadow-md lg:shadow-none">
        <div className="flex flex-col items-center py-[4px] px-[2px] ml-[50px]">
          <div>
            <img
              className="lg:h-64 lg:w-64 w-[199px] h-[199px] "
              style={{ borderRadius: "199px" }}
              src="/Ellipse 1.png"
              alt="Ellipse"
            />
          </div>
          <div className="flex flex-row gap-3.5 space-x-2 mt-7">
            <img
              className="lg:h-11 lg:w-11 w-[26px] h-[26px]"
              src="/Group6.png"
              alt="power"
            />

            <div className="font-bold lg:text-2xl text-md ml-[8px] text-[#1A2338]">
              Power of One
              <p className="lg:text-lg text-md font-normal  mt-2">
                Lorem ipsum dolor sit amet consectetur.
                <br />
                Aenean amet quam auctor neque pellentes.
              </p>
            </div>
          </div>

          <button className="font-medium text-center leading-4 text-base bg-white py-3 px-5 w-[187px] h-[56px] mt-4 rounded-lg text-[#1A2338] border border-[#1A2338]">
            Learn More
          </button>
        </div>

        <div className="flex flex-col items-center  py-[12px] px-[2px]">
          <img
            className="lg:h-64 lg:w-64 w-[199px] h-[199px] ml-[64px] "
            src="/Ellipse 2.png"
            alt="Ellipse"
          />
          <div className="flex flex-row gap-3.5  mt-7 ">
            <img className="h-11 w-11" src="/Group7.png" alt="power" />
            <div className="font-bold text-2xl ml-[8px] text-[#1A2338]">
              Enrichment Activities
              <p className="text-lg font-normal text-center mt-2">
                Lorem ipsum dolor sit amet consectetur.
                <br /> Aenean amet quam auctor neque pellentes .
              </p>
            </div>
          </div>
          <button className="font-medium text-center leading-4 text-base bg-white py-3 px-5 w-[187px] h-[56px] mt-4 rounded-lg text-[#1A2338] border border-[#1A2338]">
            Learn More
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img className="h-64 w-64" src="/Ellipse 3.png" alt="Ellipse" />
          <div className="flex flex-row gap-3.5  mt-7">
            <div className="flex gap-4">
              <img className="h-11 w-11" src="/Group8.png" alt="power" />
              <div className="font-bold text-2xl ml-[8px] text-[#1A2338]">
                Extra-curricular Activities
                <p className="text-lg font-normal text-center mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                  <br /> Aenean amet quam auctor neque pellentes .
                </p>
              </div>
            </div>
          </div>
          <button className="font-medium text-center leading-4 text-base bg-white py-3 px-5 w-[187px] h-[56px] mt-4 rounded-lg text-[#1A2338] border border-[#1A2338]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Classroom;
