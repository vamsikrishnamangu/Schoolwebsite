import React from "react";

const VisitAdmission = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-center mt-4">
          <h1 className="text-[#1A2338] lg:mt-[40px]font-Roboto lg:text-4xl  text-lg mt-[28px] font-bold">
            In This Section
          </h1>
        </div>
        <div className="lg:space-x-6 lg:flex lg:flex-row lg:mt-[63px] mt-[20px] ml-[16px]  mr-[17px] lg:mr[60px]">
          <div className="lg:h-[500px] lg:w-[750px] lg:ml-[194px]  relative">
            {" "}
            {/* Added relative class */}
            <img src="/image.png" alt="images" className="w-full h-full" />
            <h1
              className="absolute top-[150px] lg:ml-[10px] lg:top-[400px] ml-[139px] lg:left-1/2 transform -translate-x-1/2 text-start font-medium lg:text-2xl text-lg text-[#fff]"
              style={{ lineHeight: "40px" }}
            >
              Book meeting
            </h1>
          </div>
          <div className="lg:h-[500px] lg:w-[750px] mt-4 lg:mt-0 relative ">
            {" "}
            {/* Added relative class */}
            <img src="/image.png" alt="images" className="w-full h-full" />
            <h1
              className="absolute top-[150px]  ml-[139px]  lg:ml-[8px] lg:top-[400px] lg:left-1/2 transform -translate-x-1/2 text-center font-medium lg:text-2xl text-lg text-[#fff]"
              style={{ lineHeight: "40px" }}
            >
              Book Campus meet
            </h1>
          </div>
        </div>

        <div
          className="lg:flex lg:flex-row lg:mt-[15px]
mt-[16px]"
        >
          <div className=" lg:h-[214px] lg:w-[750px]  lg:ml-[194px]  ">
            <div className="flex flex-col justify-center items-center bg-[#fff] border-2 mr-[10px] border-[#1A2338]  rounded-lg p-4 ml-[15px]">
              <h2 className="text-[#1A2338] font-Roboto lg:text-xl text-sm font-normal mb-4">
                Require assistance? Submit a message online or reach us via the
                contact details below. We’d love to hear from you Require a
              </h2>
              <button className="border-1 text-[#fff] border-[#fff] bg-[#1A2338] gap-[10px] items-center rounded-md px-[20px] py-[18px] lg:mr-2 ">
                ENQUIRE & VISIT <br />
                Click here to fill the enquiry form
              </button>
            </div>
          </div>
          <div className=" lg:h-[214px] lg:w-[750px]  lg:mt-0 mt-[18px]">
            <div className="flex flex-col justify-center items-center bg-[#fff] border-2 mr-[10px] border-[#1A2338]  rounded-lg p-4 ml-[15px]">
              <h2 className="text-[#1A2338] font-Roboto lg:text-xl text-sm font-normal mb-4">
                Require assistance? Submit a message online or reach us via the
                contact details below. We’d love to hear from you Require a
              </h2>
              <button className="border-1 text-[#fff] border-[#fff] bg-[#1A2338] gap-[10px] items-center rounded-md px-[20px] py-[18px] lg:mr-2 ">
                ENQUIRE & VISIT <br />
                Click here to fill the enquiry form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitAdmission;
