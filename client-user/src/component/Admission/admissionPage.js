import React from "react";
import Admission from "../Admission";
import VisitAdmission from "../visitAdmission";
import Headadmission from "../Headadmission";

const AdmissionPage = () => {
  return (
    <div>
      <Headadmission />
      <Admission />
      <VisitAdmission />
    </div>
  );
};

export default AdmissionPage;
