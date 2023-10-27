import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveButton from "../Buttons/saveButton";
const Admission = () => {
  const [email, setEmail] = useState("");
  const [reEnterEmail, setReEnterEmail] = useState("");
  return (
    <>
      <div className="bg-[#F1F5F9] bg-cover w-[88vw] h-[100vh]">
        <div>
          <h1
            className="2xl:ml-[90px] lg:ml-[40px] mt-[48px] font-Roboto font-semibold 2xl:text-4xl lg:text-2xl text-[#1A2338]"
            style={{ lineHeight: "78px" }}
          >
            Admissions Page
          </h1>
        </div>
        <div className="2xl:w-[769px]  2xl:h-[304px] lg:w-[680px]  lg:h-[304px] rounded 2xl:mt-[44px] lg:mt-[25px] bg-[#FFFFFF] 2xl:ml-[84px] lg:ml-[25px] ">
          <Box
            className="2xl:ml-[64px] lg:ml-[15px] pt-[51px]"
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-uncontrolled"
              label="email address"
              defaultValue="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@gmail.com"
              sx={{ width: "642px", height: "56px" }}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Re-enter email address"
              defaultValue="Example@gmail.com"
              value={reEnterEmail}
              onChange={(e) => setReEnterEmail(e.target.value)}
              placeholder="Example@gmail.com"
              sx={{ width: "642px", height: "56px" }}
            />
          </Box>
          <div className=" 2xl:ml-[531px] lg:ml-[490px] ">
            <SaveButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
