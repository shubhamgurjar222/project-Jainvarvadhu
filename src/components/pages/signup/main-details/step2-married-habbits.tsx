"use client";

import { useState, ChangeEvent, SyntheticEvent } from "react";
import ErrorMsg from "@/components/error/error-msg";
import { heightList } from "@/data/height";

type Details = {
  marriedStatus: string;
  height: string;
  diet: string;
  drink: string;
  smoke: string;
};

type Errors = {
  marriedStatus?: string;
  height?: string;
  diet?: string;
  drink?: string;
  smoke?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step2Main({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    marriedStatus: sessionStorage.getItem("marriedStatus") || "",
    height: sessionStorage.getItem("height") || "",
    diet: sessionStorage.getItem("diet") || "",
    drink: sessionStorage.getItem("drink") || "",
    smoke: sessionStorage.getItem("smoke") || "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.marriedStatus) newErrors.marriedStatus = "Please select a marital status.";
    if (!details.height) newErrors.height = "Please select a height.";
    if (!details.diet) newErrors.diet = "Please select a diet.";
    if (!details.drink) newErrors.drink = "Please select a drinking habit.";
    if (!details.smoke) newErrors.smoke = "Please select a smoking habit.";
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "marriedStatus") {
      sessionStorage.setItem("marriedStatus", value);
      setDetails((prev) => ({ ...prev, marriedStatus: value }));
      if (errors.marriedStatus) setErrors((prev) => ({ ...prev, marriedStatus: "" }));
    }

    if (id === "height") {
      sessionStorage.setItem("height", value);
      setDetails((prev) => ({ ...prev, height: value }));
      if (errors.height) setErrors((prev) => ({ ...prev, height: "" }));
    }

    if (id === "diet") {
      sessionStorage.setItem("diet", value);
      setDetails((prev) => ({ ...prev, diet: value }));
      if (errors.diet) setErrors((prev) => ({ ...prev, diet: "" }));
    }

    if (id === "drinkYes" || id === "drinkNo") {
      sessionStorage.setItem("drink", value);
      setDetails((prev) => ({ ...prev, drink: value }));
      if (errors.drink) setErrors((prev) => ({ ...prev, drink: "" }));
    }

    if (id === "smokeYes" || id === "smokeNo" || id === "occ-smoke") {
      sessionStorage.setItem("smoke", value);
      setDetails((prev) => ({ ...prev, smoke: value }));
      if (errors.smoke) setErrors((prev) => ({ ...prev, smoke: "" }));
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="marriedStatus">Marital Status</label>
          <select className="form-select" id="marriedStatus" onChange={handleChange} value={details.marriedStatus}>
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="awaitingdivorce">Awaiting Divorce</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="annulled">Annulled</option>
          </select>
          <ErrorMsg field="marriedStatus" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height</label>
          <select className="form-select" id="height" onChange={handleChange} value={details.height}>
            {heightList.map((h: any) => (
              <option key={h.value} value={h.value}>{h.label}</option>
            ))}
          </select>
          <ErrorMsg field="height" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="diet">Diet</label>
          <select className="form-select" id="diet" onChange={handleChange} value={details.diet}>
            <option value="">Select Diet</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="nonvegetarian">Non-Vegetarian</option>
            <option value="occnonvegetarian">Occasionally Non-Vegetarian</option>
            <option value="eggetarian">Eggetarian</option>
            <option value="jain">Jain</option>
          </select>
          <ErrorMsg field="diet" errors={errors} />
        </div>

        <div className="flex">
          <label>Do you drink?</label>
          <div className="d-flex">
            <div>
              <input 
                className="btn-check-profile"
                type="radio" id="drinkYes"
                value="yes"
                checked={details.drink === "yes"}
                onChange={handleChange}
              />
              <label className="profile-label" htmlFor="drinkYes">Yes</label>
            </div>
            <div>
              <input
                className="btn-check-profile"
                type="radio"
                id="drinkNo"
                value="no"
                checked={details.drink === "no"}
                onChange={handleChange}
              />
              <label className="profile-label" htmlFor="drinkNo">No</label>
            </div>
            <ErrorMsg field="drink" errors={errors} />
          </div>
        </div>

        <div className="form-group flex">
          <label>Do you smoke?</label>
          <div className="d-flex flex-wrap">
            <input className="btn-check-profile" type="radio" id="smokeYes" value="yes" checked={details.smoke === "yes"} onChange={handleChange} />
            <label className="profile-label" htmlFor="smokeYes">Yes</label>

            <input className="btn-check-profile" type="radio" id="smokeNo" value="no" checked={details.smoke === "no"} onChange={handleChange} />
            <label className="profile-label" htmlFor="smokeNo">No</label>

            <input className="btn-check-profile" type="radio" id="occ-smoke" value="occ-smoke" checked={details.smoke === "occ-smoke"} onChange={handleChange} />
            <label className="profile-label" htmlFor="occ-smoke">Occasionally Smoke</label>

            <ErrorMsg field="smoke" errors={errors} />
          </div>
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}