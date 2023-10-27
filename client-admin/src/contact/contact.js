import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveButton from "../component/Buttons/saveButton";
import Publish from "../component/Buttons/publishButton";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [reEnterEmail, setReEnterEmail] = useState("");

  const handleCancel = () => {
    setEmail("");
    setReEnterEmail("");
  };

  const handlePublish = () => {
    // Save logic can be added here
    setEmail(null);
    setReEnterEmail(null);
  };
  const handleSave = () => {
    // Save logic can be added here
    console.log(handleSave, "saved");
    setEmail("");
    setReEnterEmail("");
  };

  return (
    <div className="bg-[#F1F5F9] bg-cover w-[88vw] h-[100vh]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1
            className="lg:ml-[40px] lg:mt-[24px] 2xl:ml-[90px] 2xl:mt-[48px] font-Roboto font-semibold lg:text-2xl 2xl:text-4xl text-[#1A2338]"
            // style={{ lineHeight: "78px" }}
          >
            Contact Us Page
          </h1>

          <div className="2xl:ml-[20px] lg:ml-[4px]">
            <Publish onCancel={handleCancel} onPublish={handlePublish} />
          </div>
        </div>
        <p className="font-bold lg:text-lg 2xl:text-xl text-sm 2xl:ml-[90px] lg:ml-[40px] text-[#1A2338B2] ">
          Change Phone Number & Email
        </p>
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
        <div className=" 2xl:ml-[531px] lg:ml-[480px] ">
          <SaveButton onCancel={handleCancel} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
