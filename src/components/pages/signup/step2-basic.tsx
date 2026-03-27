"use client";

import { useState } from "react";
import calculateAge from "@/lib/ageCalculator";
import ErrorMsg from "@/components/error/error-msg";

type Details = {
  firstName: string;
  lastName: string;
  dob: string;
};

type DobParts = {
  date: string;
  month: string;
  year: string;
};

type Errors = {
  firstName?: string;
  lastName?: string;
  dob?: string;
};

type Step2BasicProps = {
  onSubmit: (details: Details) => void;
};

export default function Step2Basic({ onSubmit }: Step2BasicProps) {

  const [details, setDetails] = useState<Details>(() => ({
    firstName: sessionStorage.getItem("firstName") || "",
    lastName: sessionStorage.getItem("lastName") || "",
    dob: "",
  }));

  const [dobParts, setDobParts] = useState<DobParts>(() => ({
    date: sessionStorage.getItem("date") || "",
    month: sessionStorage.getItem("month") || "",
    year: sessionStorage.getItem("year") || "",
  }));

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.firstName) newErrors.firstName = "First name is required";
    if (!details.lastName) newErrors.lastName = "Last name is required";

    const { date, month, year } = dobParts;

    if (!date || !month || !year) {
      newErrors.dob = "Date of birth is required";
    } else {
      const dobDate = new Date(Number(year), Number(month) - 1, Number(date));

      if (dobDate.getFullYear() !== Number(year) || dobDate.getMonth() !== Number(month) - 1 || dobDate.getDate() !== Number(date)) {
        newErrors.dob = "Invalid date";
      }

      if (isNaN(dobDate.getTime())) {
        newErrors.dob = "Invalid date";
      } else {
        const age = calculateAge(dobDate);
        if (age < 18) newErrors.dob = "You must be at least 18 years old";
      }
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "firstName") {
      const val = value.trim();
      setDetails((prev) => ({ ...prev, firstName: val }));
      sessionStorage.setItem(id, val);

      if (errors.firstName) {
        setErrors((prev) => ({ ...prev, firstName: "" }));
      }
    }

    if (id === "lastName") {
      const val = value.trim();
      setDetails((prev) => ({ ...prev, lastName: val }));
      sessionStorage.setItem(id, val);

      if (errors.lastName) {
        setErrors((prev) => ({ ...prev, lastName: "" }));
      }
    }

    if (id === "month" || id === "date" || id === "year") {
      if (!/^\d*$/.test(value)) return;
      if (id === "date" && Number(value) > 31) return;
      if (id === "month" && Number(value) > 12) return;
      if (id === "year" && Number(value) > new Date().getFullYear()) return;

      const updatedDob = { ...dobParts, [id]: value };
      setDobParts(updatedDob);

      const { month, date, year } = updatedDob;

      if (month && date && year) {
        sessionStorage.setItem("month", month);
        sessionStorage.setItem("date", date);
        sessionStorage.setItem("year", year);

        setDetails((prev) => ({
          ...prev,
          dob: `${year}-${month}-${date}`,
        }));
      }

      if (errors.dob) {
        setErrors((prev) => ({ ...prev, dob: "" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            onChange={handleChange}
            value={details.firstName}
          />
          <ErrorMsg field="firstName" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            onChange={handleChange}
            value={details.lastName}
          />
          <ErrorMsg field="lastName" errors={errors} />
        </div>

        <label>Date of Birth</label>
        <div className="d-flex justify-content-between">
          <input
            className="form-control w-25"
            type="text"
            maxLength={2}
            id="date"
            placeholder="DD"
            onChange={handleChange}
            value={dobParts.date}
          />
          <input
            className="form-control w-25"
            type="text"
            maxLength={2}
            id="month"
            placeholder="MM"
            onChange={handleChange}
            value={dobParts.month}
          />
          <input
            className="form-control w-25"
            type="text"
            maxLength={4}
            id="year"
            placeholder="YYYY"
            onChange={handleChange}
            value={dobParts.year}
          />
        </div>

        <ErrorMsg field="dob" errors={errors} />

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}