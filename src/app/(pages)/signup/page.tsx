"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchResources } from "@/lib/fetchResources";
import Step1 from "@/components/pages/signup/step1-gender";
import Step2 from "@/components/pages/signup/step2-basic";
import Step3 from "@/components/pages/signup/step3-religion";
import Step4 from "@/components/pages/signup/step4-email";
import Final from "@/components/pages/signup/step-final";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";

type SignupFormData = {
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
  const router = useRouter();
  const { showAlert } = useAlert();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<SignupFormData>({});

  const handleStep1Submit = (gender: string) => {
    const updated = { ...formData, gender };
    setFormData(updated);
    setCurrentStep(2);
  };

  const handleStep2Submit = (details: { firstName: string; lastName: string; dob: string; }) => {
    setFormData(prev => ({ ...prev, ...details }));
    setCurrentStep(3);
  };

  const handleStep3Submit = (details: { community: string; country: string; }) => {
    const updated = { ...formData, ...details };
    setFormData(updated);
    setCurrentStep(4);  
  };

  const handleStep4Submit = (details: { email: string; password: string; phoneNo: string; }) => {
    const updated = { ...formData, ...details };
    setFormData(updated);
    setCurrentStep(5);
  };

  const handleStepFinal = async (uploadDetails: FormData) => {
    try {
      if (!uploadDetails.get("file")) {
        showAlert({ title: "Upload Required", message: "Please upload a photo before submitting.", variant: "error", dismissible: true });
        return;
      }
      const response: any = await fetchResources("/upload", uploadDetails);
      if (response.statusCode === 200) {
        showAlert( "Success", "Photo uploaded successfully!","success", true );
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="inn">
              <div className="lhs">
                <div className="tit">
                  <h2>Now <b>Find your life partner</b> Easy and fast.</h2>
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
                    <p>Already a member? <Link href="/login">Login</Link></p>
                  </div>

                  {currentStep > 1 && (
                    <button className="mb-3 bg-transparent" onClick={() => setCurrentStep(currentStep - 1)}>
                      <ArrowLeft />
                    </button>
                  )}

                  {currentStep === 1 && ( <Step1 key={currentStep} onSubmit={handleStep1Submit} /> )}

                  {currentStep === 2 && ( <Step2 key={currentStep} onSubmit={handleStep2Submit} /> )}

                  {currentStep === 3 && ( <Step3 key={currentStep} onSubmit={handleStep3Submit} /> )}

                  {currentStep === 4 && ( <Step4 key={currentStep} onSubmit={handleStep4Submit} /> )}

                  {currentStep === 5 && ( <Final key={currentStep} onSubmit={handleStepFinal} /> )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}