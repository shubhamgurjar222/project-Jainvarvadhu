"use client"

import LoginForm from "@/components/pages/login/login"
import { fetchResources } from "@/utils/fetchResources";
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";


export default function LoginClient() {
    const router = useRouter();
    const { showAlert } = useAlert();

    const handleLogin = async (details: { email: string; password: string; rememberMe: boolean}) => {
        const { email, password, rememberMe } = details
        const formData = new FormData();
        formData.append("email", email);    
        formData.append("password", password);
        formData.append('isRemember', rememberMe.toString())

        try {
            const response: any = await fetchResources("/auth/login", formData);

            if (response.statusCode === 500) {
                showAlert("Error", response.message, "error", true)
                return
            }

            if (response.statusCode === 401) {
                showAlert("Error", response.message, "error", true)
                return 
            }

            if (response.statusCode === 404) {
                showAlert("Error", response.message, "error", true)
                return
            }
            
            if (response.statusCode === 200) {
                router.push("/dashboard");
                showAlert("Success", response.message, "success", true)
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