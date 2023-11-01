import * as React from "react";

const Admission = () => {
  //   const [activeStep, setActiveStep] = useState("");

  return (
    <>
      <div>
        <div className=" bg-[#fff] w-full">
          <div className="  flex flex-col lg:flex-row">
            <div className="lg:ml-[6.5rem] ml-[24px] mt-[26px] lg:mt-[6rem]  lg:h-1/2 lg:w-1/2 w-[330px] h-[320px]">
              <img src="admissionImage1.svg" alt="images" />
            </div>
            <div className="font-roboto-sans">
              <h1 className=" lg:mt-[11rem] lg:ml-[4rem] ml-[24px] text-[#1A2338]  lg:text-4xl text-lg font-bold ">
                START THE ADMISSION PROCESS
              </h1>
              <p className="  font-normal text-base leading-[29px] text-[#1A2338]  ml-[24px] lg:ml-[4rem] mt-2 ">
                Admissions for the Academic Year 2024-2025 are now open.Parents
                interested in providing their children with a balanced
                educational experience that fosters both academic and personal
                growth are invited to initiate the admissions process. There are
                multiple avenues to begin your enrollment journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
