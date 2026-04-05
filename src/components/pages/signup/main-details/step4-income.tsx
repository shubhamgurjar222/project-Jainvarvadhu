"use client";

import { useState, ChangeEvent, SyntheticEvent } from "react";
import ErrorMsg from "@/components/error/error-msg";
import { incomeList } from "@/data/income";

type Details = {
  income: string;
  workDetails: string;
};

type Errors = {
  income?: string;
  workDetails?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step4Main({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    income: sessionStorage.getItem("income") || "",
    workDetails: sessionStorage.getItem("workDetails") || "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.income) newErrors.income = "Please select an income range.";
    if (!details.workDetails) newErrors.workDetails = "Please select your work details.";
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    if (id === "income") {
      sessionStorage.setItem("income", value);
      setDetails((prev) => ({ ...prev, income: value }));
      if (errors.income) setErrors((prev) => ({ ...prev, income: "" }));
    }

    if (id === "WorkDetails") {
      sessionStorage.setItem("workDetails", value);
      setDetails((prev) => ({ ...prev, workDetails: value }));
      if (errors.workDetails) setErrors((prev) => ({ ...prev, workDetails: "" }));
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
          <label htmlFor="income">Income</label>
          <select className="form-select" id="income" onChange={handleChange} value={details.income}>
            <option value="">Select Income</option>
            {incomeList.map((income: any) => (
              <option key={income.value} value={income.value}>
                {income.label}
              </option>
            ))}
          </select>
          <ErrorMsg field="income" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="WorkDetails">Work Details</label>
          <select className="form-select" id="WorkDetails" onChange={handleChange} value={details.workDetails}>
            <option value="">Select Work Details</option>
            <option value="privateCompany">Private Company</option>
            <option value="governmentPublicSector">Government / Public Sector</option>
            <option value="defenseCivilServices">Defense / Civil Services</option>
            <option value="businessSelfEmployed">Business / Self Employed</option>
            <option value="notWorking">Not Working</option>
          </select>
          <ErrorMsg field="workDetails" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}