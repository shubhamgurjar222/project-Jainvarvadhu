"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import Step1Main from "@/components/pages/signup/main-details/step1-country-family";
import Step2Main from "@/components/pages/signup/main-details/step2-married-habbits";
import Step3Main from "@/components/pages/signup/main-details/step3-education";
import Step4Main from "@/components/pages/signup/main-details/step4-income";
import Step5Main from "@/components/pages/signup/main-details/step5-aboutyourself";
import Step6Main from "@/components/pages/signup/main-details/step6-hobbies";
import Step7Main from "@/components/pages/signup/main-details/step7-familydetails";
import StepFinal from "@/components/pages/signup/main-details/step-final";

type FormDataType = {
  [key: string]: any;
};

export default function Page() {
  const [currentStepMain, setCurrentStepMain] = useState<number>(1);
  const [photoStep, setPhotoStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataType>({});

  const handleStep1Main = (details: any) => {
    const { city, state, living } = details;
    setFormData((prev) => ({ ...prev, city, state, living }));
    setCurrentStepMain(2);
  };

  const handleStep2Main = (details: any) => {
    const { height, marriedStatus, diet, drink, smoke } = details;
    setFormData((prev) => ({...prev, height, marriedStatus, diet, drink, smoke, }));
    setCurrentStepMain(3);
  };

  const handleStep3Main = (details: any) => {
    const { highestqualification, collegeName } = details;
    setFormData((prev) => ({ ...prev, highestqualification, collegeName }));
    setCurrentStepMain(4);
  };

  const handleStep4Main = (details: any) => {
    const { income, workDetails } = details;
    setFormData((prev) => ({ ...prev, income, workDetails }));
    setCurrentStepMain(5);
  };

  const handleStep5Main = (details: any) => {
    const { aboutYourSelf } = details;
    setFormData((prev) => ({ ...prev, aboutYourSelf }));
    setCurrentStepMain(6);
  };

  const handleStep6Main = (details: any) => {
    const [hobbies1, hobbies2, hobbies3, hobbies4, hobbies5] =
      details.hobbies;

    setFormData((prev) => ({...prev, hobbies1, hobbies2, hobbies3, hobbies4, hobbies5, }));

    setCurrentStepMain(7);
  };

  const handleStep7Main = (details: any) => {
    const {
      fatherDetails,
      motherDetails,
      sisters,
      brothers,
      familyFinancialStatus,
    } = details;

    setFormData((prev) => ({
      ...prev,
      fatherDetails,
      motherDetails,
      sisters,
      brothers,
      familyFinancialStatus,
    }));

    setPhotoStep(1);
  };

  const handleStepFinal = (details: any) => {
    const { image } = details;
    console.log("photo algo not completed");
    console.log(formData);
  };

  return (
    <section>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="inn">
              <div className="lhs">
                <div className="tit">
                  <h2>
                    Ready <b>Meet your future partner</b> easy and fast.
                  </h2>
                </div>
                <div className="im">
                  <img src="images/login-couple.png" alt="" />
                </div>
                <div className="log-bg">&nbsp;</div>
              </div>

              {photoStep === 1 && (
                <div className="rhs">
                  <div>
                    <div className="form-tit">
                      <h1>Profiles without photos are mysterious</h1>
                    </div>

                    <StepFinal onSubmit={handleStepFinal} />
                  </div>
                </div>
              )}

              {photoStep === 0 && (
                <div className="rhs">
                  <div>
                    <div className="form-tit">
                      <h1>
                        Welcome to the ‘Make Yourself Look Impressive’
                        section.
                      </h1>
                    </div>

                    {currentStepMain > 1 && (
                      <button
                        className="mb-3 bg-transparent"
                        onClick={() =>
                          setCurrentStepMain(currentStepMain - 1)
                        }
                      >
                        <ArrowLeft />
                      </button>
                    )}

                    {currentStepMain === 1 && (
                      <Step1Main onSubmit={handleStep1Main} />
                    )}
                    {currentStepMain === 2 && (
                      <Step2Main onSubmit={handleStep2Main} />
                    )}
                    {currentStepMain === 3 && (
                      <Step3Main onSubmit={handleStep3Main} />
                    )}
                    {currentStepMain === 4 && (
                      <Step4Main onSubmit={handleStep4Main} />
                    )}
                    {currentStepMain === 5 && (
                      <Step5Main onSubmit={handleStep5Main} />
                    )}
                    {currentStepMain === 6 && (
                      <Step6Main onSubmit={handleStep6Main} />
                    )}
                    {currentStepMain === 7 && (
                      <Step7Main onSubmit={handleStep7Main} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}