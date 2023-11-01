import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Placeholder = () => {
  const [slides, setSlides] = useState([1]);

  const handleAddRow = () => {
    setSlides((prevSlides) => [...prevSlides, prevSlides.length + 1]);
  };

  return (
    <div className="flex flex-col ">
      <div>
        <p className="font-[Roboto] lg:ml-[40px] 2xl:ml-[90px] mt-[18px] font-semibold text-xl font-Roboto text-[#1A2338B2]">
          Free Placeholder
        </p>
      </div>
      {slides.map((slideNum) => (
        <div
          className="lg:ml-[40px] 2xl:w-[934px]  2xl:ml-[90px] lg:w-[700px] 2xl:h-[384px] lg:h-[100px]  rounded-lg"
          key={slideNum}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${slideNum}a-content`}
              id={`panel${slideNum}a-header`}
            >
              <Typography>{`Slide ${slideNum}`}</Typography>
            </AccordionSummary>
            <AccordionDetails className="h-[180px]">
              <div className="flex space-x-4 font-[Roboto]">
                <div className="flex flex-col 2xl:w-[460px] 2xl:h-[152px] lg:w-[400px] lg:h-[120px]">
                  <label className="mb-2 font-semibold">Description</label>
                  <textarea
                    className="border px-4 py-2 rounded"
                    placeholder="Type Description ...."
                    rows="6"
                  ></textarea>
                </div>
                <div className="flex flex-col w-[460px] h-[100px]">
                  <label className="font-semibold">Link</label>
                  <input
                    type="text"
                    className="border px-4 py-2 w-full rounded"
                    placeholder="http://example.org/1234567890"
                  />
                </div>
              </div>

              <div className="font-[Roboto] lg:ml-[450px] space-x-4  ">
                <Button
                  variant="outlined"
                  style={{
                    borderColor: "#2196F3",
                    color: "#2196F3",
                    fontSize: "14px",
                    fontWeight: "500px",
                    borderRadius: "4px",
                    padding: "10px,18px",
                  }}
                >
                  CANCEL
                </Button>

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#5BD877",
                    color: "#fff",
                    padding: "10px,18px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    borderRadius: "4px",
                  }}
                >
                  SAVE
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
      <button
        className=" font-[Roboto] 2xl:ml-[800px]  lg:ml-[600px]  w-[134px] h-[50px]  border-2 border-gray-500 rounded-lg mt-[4px]"
        onClick={handleAddRow}
      >
        ADD ROW +
      </button>
    </div>
  );
};

export default Placeholder;
