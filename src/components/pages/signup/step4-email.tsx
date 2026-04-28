"use client";

import { useState, } from "react";
import ErrorMsg from "@/components/error/error-msg";
import { Eye, EyeOff } from "lucide-react";
import { fetchResources } from "@/utils/fetchResources";


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

let emailTimer: any;
let phoneNoTimer: any;

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
      
      clearTimeout(emailTimer);
      emailTimer = setTimeout(async () => {
        const formData = new FormData();
        formData.append("email", trimmedvalue);
        try {
          const isEmailRegistered: any = await fetchResources("/auth/checkUserByEmail", formData);
          if (isEmailRegistered?.data) {
            setErrors((prev) => ({ ...prev, email: "Email already registered"}));
            return
          } else {
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }
        } catch (error) {
          console.error(error);
        }
      }, 4000);

      sessionStorage.setItem("email", trimmedvalue);
      setDetails({ ...details, email: sessionStorage.getItem("email") || "" });
    } 

    if (id === "password") {
      sessionStorage.setItem("password", value);
      setDetails({ ...details, password: sessionStorage.getItem("password") || "" });
      if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
    }
    
    if (id === "phoneNo") {
      const trimmedvalue = value.trim();
      const isNumeric = /^[0-9]*$/.test(trimmedvalue);

      if (isNumeric === false) {
        setErrors((prev) => ({ ...prev, phoneNo: "Text Not Allowed" }));
      } else {
        setErrors((prev) => ({ ...prev, phoneNo: "" }));
      }

      clearTimeout(phoneNoTimer);
      phoneNoTimer = setTimeout(async () => {
        const formData = new FormData();
        formData.append("phoneNo", trimmedvalue);
        try {
          const isPhoneNoRegistered: any = await fetchResources("/auth/checkUserByPhoneNo", formData);
          if (isPhoneNoRegistered?.data) {
            setErrors((prev) => ({ ...prev, phoneNo: "Phone Number already registered"}));
            return
          } else {
            if (errors.phoneNo) setErrors((prev) => ({ ...prev, phoneNo: "" }));
          }
        } catch (error) {
          console.error(error);
        }
      }, 4000);

      sessionStorage.setItem("phoneNo", trimmedvalue);
      setDetails({ ...details, phoneNo: sessionStorage.getItem("phoneNo") || "" });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();

    if (errors.email) {
      newErrors.email = errors.email;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
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
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? ( <Eye color="#66451c" /> ) : ( <EyeOff color="#66451c" /> )}
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