"use client";

import { useState, } from "react";
import ErrorMsg from "@/components/error/error-msg";
import { Eye, EyeOff } from "lucide-react";
import { fetchResources } from "@/lib/fetchResources";

type Details = {
  email: string;
  password: string;
  phoneNo: string;
};

type Errors = {
  email?: string;
  password?: string;
  phoneNo?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step4Email({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    email: sessionStorage.getItem("email") || "",
    password: sessionStorage.getItem("password") || "",
    phoneNo: sessionStorage.getItem("phoneNo") || "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPasswordVisible = () => { return showPassword; };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.email) newErrors.email = "Please enter your email.";
    if (!details.password) newErrors.password = "Please enter a password.";
    if (!details.phoneNo || details.phoneNo.length !== 10) {
      newErrors.phoneNo = "Please enter a valid 10-digit phone number.";
    }
    return newErrors;
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "email") {
      const trimmedvalue = value.trim();
      const formData = new FormData();
      formData.append("email", trimmedvalue);

      try {
        const isEmailRegistered = await fetchResources("/auth/checkUserByEmail", formData)
        console.log(isEmailRegistered)

        if (isEmailRegistered?.data) {
          setErrors((prev) => ({...prev, email: "Email already registered"}));
        }
      } catch (error) {
        throw new Error(data?.message || "Request failed");
      }
      setDetails({ ...details, email: trimmedvalue });
      sessionStorage.setItem("email", trimmedvalue);
      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
    } 

    if (id === "password") {
      setDetails({ ...details, password: value });
      sessionStorage.setItem("password", value);
      if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));

    }
    
    if (id === "phoneNo") {
      const trimmedvalue = value.trim();
      setDetails({ ...details, phoneNo: trimmedvalue });
      sessionStorage.setItem("phoneNo", trimmedvalue);
      if (errors.phoneNo) setErrors((prev) => ({ ...prev, phoneNo: "" }));
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log(details)

    onSubmit(details);
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" onChange={handleChange} value={details.email} />
          <ErrorMsg field="email" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="position-relative">
            <input
              type={isPasswordVisible() ? "text" : "password"}
              id="password"
              className="form-control"
              onChange={handleChange}
              value={details.password}
            />
            <button
              type="button"
              className="position-absolute top-50 end-0 translate-middle-y pe-2 bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye color="#66451c" />
              ) : (
                <EyeOff color="#66451c" />
              )}
            </button>
          </div>
          <ErrorMsg field="password" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            id="phoneNo"
            maxLength={10}
            className="form-control"
            onChange={handleChange}
            value={details.phoneNo}
          />
          <ErrorMsg field="phoneNo" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Submit</button>
      </form>
    </div>
  );
}