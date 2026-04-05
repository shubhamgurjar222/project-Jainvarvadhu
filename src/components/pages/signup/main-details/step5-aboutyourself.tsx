"use client";

import { useState, ChangeEvent, SyntheticEvent } from "react";
import ErrorMsg from "@/components/error/error-msg";

type Details = {
  aboutYourSelf: string;
};

type Errors = {
  aboutYourSelf?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step5Main({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    aboutYourSelf: sessionStorage.getItem("aboutyourself") || "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.aboutYourSelf) {
      newErrors.aboutYourSelf = "Please enter a description about yourself.";
    }
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    if (id === "aboutyourself") {
      setDetails((prev) => ({ ...prev, aboutYourSelf: value }));
      sessionStorage.setItem("aboutyourself", value);

      if (errors.aboutYourSelf) {
        setErrors((prev) => ({ ...prev, aboutYourSelf: "" }));
      }
    }
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(details);
  };

  return (
    <div className="form-login">
      <h6>We Have added short description about you</h6>

      <form onSubmit={handleSubmit}>
        <div className="form-group input-textarea">
          <label htmlFor="aboutyourself">About Yourself*</label>

          <textarea id="aboutyourself" maxLength={4000} value={details.aboutYourSelf} onChange={handleChange}/>

          <div className="max-words">
            <span>{details.aboutYourSelf.length}/4000</span>
          </div>

          <ErrorMsg field="aboutYourSelf" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}