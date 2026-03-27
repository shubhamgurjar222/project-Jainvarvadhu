"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

import Step1 from "@/components/pages/signup/step1-gender";
import Step2 from "@/components/pages/signup/step2-basic";
import Step3 from "@/components/pages/signup/step3-religion";
import Step4 from "@/components/pages/signup/step4-email";

// ✅ Define form data type (simple & optional fields)
type FormData = {
  gender?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  community?: string;
  country?: string;
  email?: string;
  password?: string;
  phoneNo?: string;
};

export default function Signup() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({});

  const handleStep1Submit = (gender: string) => {
    const updated = { ...formData, gender };
    sessionStorage.setItem("gender", gender);
    setFormData(updated);
    setCurrentStep(2);
  };

  const handleStep2Submit = (details: {
    firstName: string;
    lastName: string;
    dob: string;
  }) => {
    const updated = { ...formData, ...details };
    setFormData(updated);
    setCurrentStep(3);
  };

  const handleStep3Submit = (details: {
    community: string;
    country: string;
  }) => {
    const updated = { ...formData, ...details };
    setFormData(updated);
    setCurrentStep(4);
  };

  const handleStep4Submit = (details: {
    email: string;
    password: string;
    phoneNo: string;
  }) => {
    const updated = { ...formData, ...details };
    setFormData(updated);
    console.log(updated);
    setCurrentStep(5);
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
                    Now <b>Find your life partner</b> Easy and fast.
                  </h2>
                </div>
                <div className="im">
                  <img src="images/login-couple.png" alt="" />
                </div>
                <div className="log-bg">&nbsp;</div>
              </div>

              <div className="rhs">
                <div>
                  <div className="form-tit">
                    <h4>Start for free</h4>
                    <h1>Sign up to Jainvarvadhu</h1>
                    <p>
                      Already a member? <Link href="/login">Login</Link>
                    </p>
                  </div>

                  {currentStep > 1 && (
                    <button
                      className="mb-3 bg-transparent"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      <ArrowLeft />
                    </button>
                  )}

                  {currentStep === 1 && (
                    <Step1 onSubmit={handleStep1Submit} />
                  )}
                  {currentStep === 2 && (
                    <Step2 onSubmit={handleStep2Submit} />
                  )}
                  {currentStep === 3 && (
                    <Step3 onSubmit={handleStep3Submit} />
                  )}
                  {currentStep === 4 && (
                    <Step4 onSubmit={handleStep4Submit} />
                  )}
                  {currentStep === 5 && redirect("/signup/main")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}