import React, { useState } from "react";

const Contactform = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [childStudiesHere, setChildStudiesHere] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div>
      <div className="bg-[#fff] flex flex-col lg:flex-row mt-8 p-6">
        <div className=" lg:p-4 lg:mt-20   lg:ml-[5rem] ml-[24px]">
          <p className="lg:w-[432px] w-[310px] lg:text-[#A3A3A3] text-[#000] font-Roboto lg:text-[36px]  text-lg font-extrabold leading-[130%]">
            Write to us if you have queries/concerns or if you want to give us
            feedback
          </p>
        </div>

        <div className="flex-1 p-4 2xl:ml-[28rem]">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-2">
              <input
                type="radio"
                id="doesntStudy"
                name="studyStatus"
                onChange={() => setChildStudiesHere(false)}
              />
              <label className="text-xl font-normal" htmlFor="doesntStudy">
                My child doesn't study here
              </label>
            </div>

            <div className="flex flex-row space-x-2">
              <input
                type="radio"
                id="studiesHere"
                name="studyStatus"
                onChange={() => setChildStudiesHere(true)}
              />
              <label className="text-xl font-normal" htmlFor="studiesHere">
                My child studies here
              </label>
            </div>
          </div>
          <form>
            <div className="mb-4 lg:mt-[64px] mt-[37px]">
              <label className="block text-black font-normal text-xl">
                Status your requirement <span className="text-red-500">*</span>
                <select className="mt-2 p-2 w-full border rounded">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </label>
            </div>
            <div className={`mb-4 ${!childStudiesHere ? "opacity-50" : ""}`}>
              <label className="block text-black font-normal text-xl">
                Select Campus <span className="text-red-500">*</span>
                <select
                  className="mt-2 p-2 w-full border rounded"
                  disabled={!childStudiesHere}
                >
                  <option value="campus1">Campus 1</option>
                  <option value="campus2">Campus 2</option>
                </select>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-black font-normal text-xl">
                Name<span className="text-red-500">*</span>
                <input
                  type="email"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-black font-normal text-xl">
                E Mail
                <input
                  type="email"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-black font-normal text-xl">
                Phone
                <input
                  type="tel"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-black font-normal text-xl">
                Message
                <input
                  type="text"
                  placeholder=""
                  className="mt-2 p-10 w-full border rounded"
                />
              </label>
            </div>

            {/* Include your Captcha component here */}
            <div
              className="mb-16 mt-[28px] w-[247px] h-[71px] relative cursor-pointer"
              onClick={() => setIsChecked(!isChecked)}
            >
              <img
                src={isChecked ? "/Robot1.png" : "/Robot.png"}
                alt="Captcha"
              />
            </div>

            <div className="w-[111px] h-[45px] lg:w-[186px] lg:h-[56px] lg:mt-[21px]  lg:mb-4 py-[18px] px-[20px] justify-center items-center  border rounded-md  border-[#000] ">
              <button
                onClick={handleSubmit}
                type="submit"
                className="items-center font-medium bg-[#fff] text-[#1A2338]"
              >
                Submit
              </button>
            </div>
          </form>
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div
                className="bg-white rounded-xl p-5 w-[1187px] h-[500px]"
                style={{ top: "671px", left: "127px", borderRadius: "16px" }}
              >
                <div className="flex flex-col lg:ml-[6rem] lg:mt-[7rem]">
                  <h1
                    className="font-bold text-5xl text-center line-height:1.25rem text-black"
                    style={{ lineHeight: "50px" }}
                  >
                    Thank you for writing to us.
                  </h1>
                  <p
                    className=" mt-4 lg:ml-[10rem] font-normal text-3xl text-[#1A2338]"
                    style={{ lineHeight: "39px" }}
                  >
                    Our team will revert to you in 1 working day. If urgent
                    <br />
                    <span className="ml-[4rem]">
                      {" "}
                      you call us during School working hours
                    </span>
                  </p>
                </div>
                <button
                  className=" mt-[4.8rem] mb-[6rem]  px-[50px] py-[10px] ml-[29rem] rounded-xl bg-[#1A2338] text-white "
                  onClick={() => setModalOpen(false)}
                >
                  Click here
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactform;
