
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import ErrorMsg from "@/components/error/error-msg";
import Loading from "@/components/loading/loading";

type Props = {
  onSubmit: (data: Details) => void;
};

type Errors = {
  email?: string;
  password?: string;
};

type Details = {
  email: string;
  password: string;
  rememberMe: boolean;
};


export default function LoginForm ({ onSubmit }: Props) {

    const [details, setDetails] = useState<Details>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState<Errors>({});
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isPasswordVisible = () => { return showPassword; };
    const [loading, setLoading] = useState(false)

    const validate = (): Errors => {
        const newErrors: Errors = {};
        if (!details.email) newErrors.email = "Please enter your email.";
        if (!details.password) newErrors.password = "Please enter a password.";
        return newErrors;
    };

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
    
        if (id === "email") {
          const trimmedemail = value.trim();
          if (!trimmedemail) {
            setErrors((prev) => ({ ...prev, email: "" }));
            return
          }
          setDetails({ ...details, email: trimmedemail });
        } 

        if (id === "password") {
            const trimmedPassword = value.trim();
            if (!trimmedPassword) {
                setErrors((prev) => ({ ...prev, password: "" }));
                return
            }
            setDetails({ ...details, password: trimmedPassword });
        }

        if (type === "checkbox") {
            setDetails({ ...details, [id]: checked });
            return;
        }
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true)
        onSubmit(details);
    };



    return (
        <div className="rhs">
            <div>
                <div className="form-tit">
                    <h4>Start for free</h4>
                    <h1>Sign in to Jainvarvadhu</h1>
                    <p>Not a member? <Link href="/signup">Sign up now</Link></p>
                </div>
                <div className="form-login">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="lb" htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email"
                                placeholder="Enter email" name="email" onChange={handleChange} />
                            <ErrorMsg field="email" errors={errors} />
                        </div>
                        <div className="form-group">
                            <label className="lb" htmlFor="password">Password:</label>
                            <div className="position-relative">
                                <input type={isPasswordVisible() ? "text" : "password"}
                                    className="form-control position-relative" id="password" placeholder="Enter password"
                                    name="password" onChange={handleChange} />
                                <button
                                    type="button"
                                    className="position-absolute top-50 end-0 translate-middle-y pe-2 bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <Eye color="#66451c" />
                                    ) : (
                                        <EyeOff color="#66451c" />
                                    )}
                                </button>
                            </div>
                            <ErrorMsg field="password" errors={errors} />
                        </div>
                        <div className="form-group form-check">
                            <div className="d-flex justify-content-between">
                                <label className="form-check-label">
                                    <input className="form-check-input"
                                     type="checkbox"
                                     id="rememberMe"
                                     checked={details.rememberMe}
                                     onChange={handleChange}
                                    /> Remember me
                                </label>
                                
                                <Link href="/forget-password">Forget Password</Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                        {loading && <Loading />}
                    </form>
                </div>
            </div>
        </div>
    )
}