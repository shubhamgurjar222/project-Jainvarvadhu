"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import ErrorMsg from "@/components/error/error-msg";

type Details = {
  fatherDetails: string;
  motherDetails: string;
  sisters: string;
  brothers: string;
  familyFinancialStatus: string;
};

type Errors = {
  fatherDetails?: string;  
  motherDetails?: string;
  sisters?: string;
  brothers?: string;
  familyFinancialStatus?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step8FamilyDetails({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    fatherDetails: sessionStorage.getItem("fatherDetails") || "",
    motherDetails: sessionStorage.getItem("motherDetails") || "",
    sisters: sessionStorage.getItem("sisters") || "0",
    brothers: sessionStorage.getItem("brothers") || "0",
    familyFinancialStatus: sessionStorage.getItem("familyFinancialStatus") || "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.fatherDetails) newErrors.fatherDetails = "Father's details are required";
    if (!details.motherDetails) newErrors.motherDetails = "Mother's details are required";
    if (!details.sisters) newErrors.sisters = "Number of sisters is required";
    if (!details.brothers) newErrors.brothers = "Number of brothers is required";
    if (!details.familyFinancialStatus) newErrors.familyFinancialStatus = "Family financial status is required";
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, name, value } = e.target;

    if (id === "motherDetails" || id === "fatherDetails" || id === "sisters" || id === "brothers") {
      setDetails((prev) => ({ ...prev, [id]: value }));
      sessionStorage.setItem(id, value);

      if (errors[id as keyof Errors]) {
        setErrors((prev) => ({ ...prev, [id]: "" }));
      }
    }

    if (name === "familyFinancialStatus") {
      setDetails((prev) => ({ ...prev, familyFinancialStatus: value }));
      sessionStorage.setItem(name, value);

      if (errors.familyFinancialStatus) {
        setErrors((prev) => ({ ...prev, familyFinancialStatus: "" }));
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
          <label htmlFor="motherDetails">Mother Details</label>
          <select className="form-select" id="motherDetails" onChange={handleChange} value={details.motherDetails}>
            <option value="">Select Mother Details</option>
            <option value="Employeed">Employeed</option>
            <option value="Businesswoman">Businesswoman</option>
            <option value="Retired">Retired</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Passed Away">Passed Away</option>
          </select>
          <ErrorMsg field="motherDetails" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="fatherDetails">Father Details</label>
          <select className="form-select" id="fatherDetails" onChange={handleChange} value={details.fatherDetails}>
            <option value="">Select Father Details</option>
            <option value="Employeed">Employeed</option>
            <option value="Businessman">Businessman</option>
            <option value="Retired">Retired</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Passed Away">Passed Away</option>
          </select>
          <ErrorMsg field="fatherDetails" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="sisters">No. of Sisters</label>
          <input type="number" id="sisters" className="form-control" min="0" onChange={handleChange} value={details.sisters} />
          <ErrorMsg field="sisters" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="brothers">No. of Brothers</label>
          <input type="number" id="brothers" className="form-control" min="0" onChange={handleChange} value={details.brothers} />
          <ErrorMsg field="brothers" errors={errors} />
        </div>

        <div className="form-group">
          <label>Your Family Financial Status</label>
          <div className="d-flex flex-wrap">
            {["elite", "high", "middle", "aspiring"].map((val) => (
              <div key={val}>
                <input className="btn-check-profile" type="radio" name="familyFinancialStatus" id={val} value={val} checked={details.familyFinancialStatus === val} onChange={handleChange} />
                <label className="profile-label" htmlFor={val}>{val}</label>
              </div>
            ))}
          </div>
          <ErrorMsg field="familyFinancialStatus" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}