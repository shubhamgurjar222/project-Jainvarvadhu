"use client"

import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Step1Main from "@/components/pages/signup/main-details/step1-country-family";
import Step2Main from "@/components/pages/signup/main-details/step2-married-habbits";
import Step3Main from "@/components/pages/signup/main-details/step3-education";
import Step4Main from "@/components/pages/signup/main-details/step4-income";
import Step5Main from "@/components/pages/signup/main-details/step5-aboutyourself";
import Step6Main from "@/components/pages/signup/main-details/step6-hobbies";
import Step7Main from "@/components/pages/signup/main-details/step7-familydetails";
import StepFinal from "@/components/pages/signup/main-details/step-final";
import { useAlert } from "@/context/AlertContext";
import { redirect, useRouter } from "next/navigation";
import { fetchResources } from "@/utils/fetchResources";

type JwtPayload = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type Props = {
  user: JwtPayload;
};


export default function SignupMainClient () {

    const router = useRouter();
    const { showAlert } = useAlert();
    const [currentStepMain, setCurrentStepMain] = useState<number>(1);
    const [photoStep, setPhotoStep] = useState<number>(0);
    const formDataRef = useRef(new FormData());
    const allformData = formDataRef.current;

    const fields = {
        email: sessionStorage.getItem("email") || "",
        password: sessionStorage.getItem("password") || "",
        dob: sessionStorage.getItem("dob") || "",
        community: sessionStorage.getItem("community") || "",
        country: sessionStorage.getItem("country") || "",
        firstName: sessionStorage.getItem("firstName") || "",
        lastName: sessionStorage.getItem("lastName") || "",
        gender: sessionStorage.getItem("gender") || "",
        phoneNo: sessionStorage.getItem("phoneNo") || "",
    }

    const emptyField = Object.entries(fields).find(
        ([_, value]) => !value || value.trim() === ""
    );

    if (emptyField) {
        showAlert("Error", "Essentials User data is Missing", "error", true)
        redirect("/signup")
    }

    Object.entries(fields).forEach(([key, value]) => {
        allformData.append(key, value);
    });


    const handleStep1Main = (details: any) => {
        const { city, state, living } = details;
        allformData.append("city", city);
        allformData.append("state", state);
        allformData.append("living", living);
        setCurrentStepMain(2);
    };

    const handleStep2Main = (details: any) => {
        const { height, marriedStatus, diet, drink, smoke } = details;
        allformData.append("height", height);
        allformData.append("marriedStatus", marriedStatus);
        allformData.append("diet", diet);
        allformData.append("drink", drink);
        allformData.append("smoke", smoke);
        setCurrentStepMain(3);
    };

    const handleStep3Main = (details: any) => {
        const { highestqualification, collegeId } = details;
        allformData.append("highestqualification", highestqualification);
        allformData.append("collegeId", collegeId);
        setCurrentStepMain(4);
    };

    const handleStep4Main = (details: any) => {
        const { income, workDetails } = details;
        allformData.append("income", income);
        allformData.append("workDetails", workDetails);
        setCurrentStepMain(5);
    };

    const handleStep5Main = (details: any) => {
        const { aboutYourSelf } = details;
        allformData.append("aboutYourSelf", aboutYourSelf);
        setCurrentStepMain(6);
    };

    const handleStep6Main = (details: any) => {
        details.hobbies.forEach((hobby: string, index: number) => {
            allformData.append(`hobbies${index + 1}`, hobby);
        });
        setCurrentStepMain(7);
    };

    const handleStep7Main = async (details: any) => {
        const { fatherDetails, motherDetails, sisters, brothers, familyFinancialStatus, } = details;
        allformData.append("fatherDetails", fatherDetails)
        allformData.append("motherDetails", motherDetails)
        allformData.append("sisters", sisters)
        allformData.append("brothers", brothers)
        allformData.append("familyFinancialStatus", familyFinancialStatus)


        for (let [key, value] of allformData.entries()) {
            if (value === "" || value === null || value === undefined) {
                showAlert("Error", "User data is Missing", "error", true)
                redirect("/signup")
            }
        }

        try {
            const response: any = await fetchResources("/auth/signup", allformData)

            if (response.statusCode === 500) {
                showAlert("Error", response.message, "error", true)
                return
            }

            if (response.statusCode === 400) {
                showAlert("Error", response.message, "error", true)
                return
            }

            if (response.statusCode === 200) {
                showAlert("Success", response.message, "success", true)
                setPhotoStep(1);
            }

        } catch (error) {
            showAlert("Error", "Error while registering User ", "error", true);
            return
        }

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
                    <h2>Ready <b>Meet your future partner</b> easy and fast.</h2>
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
                        <h1>Welcome to the ‘Make Yourself Look Impressive’ section.</h1>
                        </div>

                        {currentStepMain > 1 && (
                        <button className="mb-3 bg-transparent" onClick={() => setCurrentStepMain(currentStepMain - 1) }>
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

