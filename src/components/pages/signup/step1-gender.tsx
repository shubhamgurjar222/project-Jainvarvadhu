"use client";
import { useState, useEffect } from "react";

type Step1GenderProps = {
  onSubmit: (gender: string) => void;
};

export default function Step1Gender({ onSubmit }: Step1GenderProps) {
  
  const [gender, setGender] = useState<string>("");

  useEffect(() => {
  const savedGender = sessionStorage.getItem("gender");
  if (savedGender) {
    setGender(savedGender);
  }
}, []);


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setGender(e.target.value);
  sessionStorage.setItem("gender", e.target.value);
};

const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!gender) return;
  onSubmit(gender);
};

  return (
    <div className="profile-selection-container">
      <h2 className="profile-title h3">This Profile is for</h2>

      <div className="d-flex flex-wrap form-login">
        <form onSubmit={handleSubmit}>
          
          <input
            type="radio"
            name="profileFor"
            id="male"
            className="btn-check-profile"
            checked={gender === "male"}
            onChange={handleChange}
            value="male"
          />
          <label htmlFor="male" className="profile-label">Male</label>

          <input
            type="radio"
            name="profileFor"
            id="female"
            className="btn-check-profile"
            checked={gender === "female"}
            onChange={handleChange}
            value="female"
          />
          <label htmlFor="female" className="profile-label">Female</label>

          {gender && (<button className="btn btn-primary mt-3" type="submit">Continue</button>)}
        </form>
      </div>
    </div>
  );
}