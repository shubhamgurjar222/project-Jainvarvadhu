"use client"

import { fetchResources } from "@/utils/fetchResources";
import { metadata } from "next"
import { useRouter } from "next/navigation";
import  LoginForm from "@/components/pages/login/login"
import { useAlert } from "@/context/AlertContext";

export const Metadata = {
    title: "Login - Wedding Matrimony",
    description: "Login component for the Wedding Matrimony website.",
}


export default function Login() {

    const router = useRouter();
    const { showAlert } = useAlert();

    const handleLogin = async (details: { email: string; password: string;}) => {
        const { email, password } = details
        const formData = new FormData();
        formData.append("email", email);    
        formData.append("password", password);

        try {
            const response: any = await fetchResources("/auth/login", formData);

            console.log(response)

            if (response.message === "Incorrect Password") {
                showAlert("Error", response.message, "error", true)
            }

            if (response.message === "User Not Found") {
                showAlert("Error", response.message, "error", true)
            }


            if (response.success === true) {
                router.push("/dashboard");
            } else {
                console.log(response.message);
            }
            
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <section>
                <div className="login">
                    <div className="container">
                        <div className="row">

                            <div className="inn">
                                <div className="lhs">
                                    <div className="tit">
                                        <h2>Now <b>Find <br></br> your life partner</b> Easy and fast.</h2>
                                    </div>
                                    <div className="im">
                                        <img src="images/login-couple.png" alt=""></img>
                                    </div>
                                    <div className="log-bg">&nbsp;</div>
                                </div>
                                <LoginForm onSubmit={handleLogin} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}