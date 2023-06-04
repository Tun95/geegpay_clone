import React, { useState } from "react";
import {
  Company,
  Freelancer,
} from "../../../components/form/register/info/Infomation";
import { BusinessType } from "../../../components/form/register/main/StepperForm";
import Testimonies from "../../../components/form/register/main/Testimonies";
import "./styles.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";

export function RegisterScreen() {
  // ===Freelancer==//
  const [freelancer, setFreelancer] = useState(false);
  const closeFreelancer = () => {
    setFreelancer(false);
    document.body.style.overflow = "unset";
  };
  const showFreelancer = () => {
    setFreelancer(true);
  };
  const FreelancerList = () => {
    showFreelancer();
    closeCompany();
  };

  // ===Company==//
  const [company, setCompany] = useState(false);
  const closeCompany = () => {
    setCompany(false);
    document.body.style.overflow = "unset";
  };
  const showCompany = () => {
    setCompany(true);
  };
  const CompanyList = () => {
    showCompany();
    closeFreelancer();
  };
  return (
    <>
      <div className="register">
        <div className="register_box d_flex">
          <BusinessType
            freelancer={freelancer}
            FreelancerList={FreelancerList}
            company={company}
            CompanyList={CompanyList}
          />
          {freelancer ? (
            <Freelancer />
          ) : company ? (
            <Company />
          ) : (
            <Testimonies />
          )}
        </div>
      </div>
    </>
  );
}

// export function EmailStepper({ freelancer, company }) {
//   return (
//     <div className="register">
//       <div className="register_box d_flex">
//         <EmailStep />
//         {/* {freelancer === true ? ( */}
//         <Freelancer />
//         {/* ) : company === true ? ( */}
//         <Company />
//         {/* ) : (
//           ""
//         )} */}
//       </div>
//     </div>
//   );
// }
