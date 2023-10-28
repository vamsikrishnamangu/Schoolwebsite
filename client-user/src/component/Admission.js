import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const BasicAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1.Enquire</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Quis sit dui diam purus
            tellus vestibulum. Lorem est tortor nibh maecenas quis faucibus
            facilisi. Odio nec eget turpis amet aliquam aliquam eu pharetra. Id
            sit interdum nulla euismod enim. Faucibus aenean condimentum eu
            placerat sagittis. Libero lacus elementum donec elementum diam
            tellus malesuada. Risus aliquam condimentum purus orci mollis. Leo
            ullamcorper ac a semper. Imperdiet .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2.Visit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>3.Apply</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const Admission = () => {
  //   const [activeStep, setActiveStep] = useState("");

  return (
    <>
      <div>
        <div className="bg-[#fff] w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:ml-[137px] ml-[24px] mt-[26px] lg:mt-[101px]  lg:h-1/2 lg:w-1/2 w-[330px] h-[320px]">
              <img src="admissionImage1.svg" alt="images" />
            </div>
            <div>
              <h1 className=" lg:mt-[152px] lg:ml-[116px] ml-[24px] text-[#1A2338] font-Roboto lg:text-4xl text-lg font-bold ">
                ADMISSION PROCESS
              </h1>
              <p className=" font-roboto font-normal text-base leading-[29px] text-[#1A2338]  ml-[24px] lg:ml-[116px] mr-[17px] lg:mr-[94px]">
                Lorem ipsum dolor sit amet consectetur. Quis sit dui diam purus
                tellus vestibulum. Lorem est tortor nibh maecenas quis faucibus
                facilisi. Odio nec eget turpis amet aliquam aliquam eu pharetra.
                Id sit interdum nulla euismod enim. Faucibus aenean condimentum
                eu placerat sagittis. Libero lacus elementum donec elementum
                diam tellus malesuada. Risus aliquam condimentum purus orci
                mollis. Leo ullamcorper ac a semper. Imperdiet .
              </p>
              <button className=" border-[1px] border-[#1A2338] text-[#1A2338] rounded-lg  mt-[10px] lg:mt-[53px] gap-[10px] items-center px-[20px] py-[12px] flex lg:ml-[116px] ml-[28px] ">
                Get Fee Structure
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          {" "}
          {/* Added items-center for vertical alignment */}
          <h1 className="lg:ml-[151px] ml-[24px] text-[#1A2338] font-Roboto lg:text-2xl text-lg font-bold lg:mt-[21px] mt-[19px] whitespace-nowrap">
            Steps to Enrolment
          </h1>
          <div className="lg:ml-[250px] ml-[24px] lg:mt-[103px]">
            <BasicAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
