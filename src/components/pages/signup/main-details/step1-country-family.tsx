"use client";

import { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { City } from "country-state-city";
import Getcountry from "@/utils/getCountry";
import ErrorMsg from "@/components/error/error-msg";
import { redirect } from "next/navigation";
import { useAlert } from "@/context/AlertContext";


type Details = {
  country: string;
  state: string;
  city: string;
  living: string;
};

type Errors = {
  state?: string;
  city?: string;
  living?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step1Main({ onSubmit }: Props) {
  const { showAlert } = useAlert();
  const [details, setDetails] = useState<Details>({
    country: sessionStorage.getItem("country") || "",
    state: sessionStorage.getItem("state") || "",
    city: sessionStorage.getItem("city") || "",
    living: sessionStorage.getItem("living") || "",
  });

  const countryStates = Getcountry(details.country);

  const states: string[] = countryStates.map((s: any) => s.name);

  useEffect(() => {
    if (states.length === 0) {
      showAlert("States not found", "Error fetching states for the selected country.", "info", true);
      redirect("/signup");
    }
  }, [states.length]);

  const selectedState = countryStates.find((s: any) => s.name === details.state);

  const cities = selectedState? City.getCitiesOfState(
    selectedState.countryCode,
    selectedState.isoCode
  ): [];

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.state) newErrors.state = "Please select a state.";
    if (!details.city) newErrors.city = "Please select a city.";
    if (!details.living) newErrors.living = "Please select an option.";
    return newErrors;
  };

  const handleChange = ( e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { id, name, value } = e.target;

    if (id === "state") {
      sessionStorage.setItem(id, value);
      setDetails((prev) => ({ ...prev, state: value }));
      if (errors.state) setErrors((prev) => ({ ...prev, state: "" }));
    }

    if (id === "city") {
      sessionStorage.setItem(id, value);
      setDetails((prev) => ({ ...prev, city: value }));
      if (errors.city) setErrors((prev) => ({ ...prev, city: "" }));
    }

    if (name === "family") {
      sessionStorage.setItem("living", value);
      setDetails((prev) => ({ ...prev, living: value }));
      if (errors.living) setErrors((prev) => ({ ...prev, living: "" }));
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
          <label htmlFor="state">State</label>
          <select className="form-select" id="state" onChange={handleChange} value={details.state}>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <ErrorMsg field="state" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select className="form-select" id="city" onChange={handleChange} value={details.city}>
            <option value="">Select City</option>
            {cities.map((city: any) => (
              <option key={city.name} value={city.name}>{city.name}</option>
            ))}
          </select>
          <ErrorMsg field="city" errors={errors} />
        </div>

        <div className="d-flex flex-column">
          <label>Living</label>

          <div>
            <input 
              className="btn-check-profile"
              type="radio"
              name="family"
              id="familyYes"
              value="familyYes"
              checked={details.living === "familyYes"}
              onChange={handleChange}
            />
            <label className="profile-label" htmlFor="familyYes">I happily live with my family</label>
          </div>

          <div>
            <input
              className="btn-check-profile"
              type="radio"
              name="family"
              id="familyNo"
              value="familyNo"
              checked={details.living === "familyNo"}
              onChange={handleChange}
            />
            <label className="profile-label" htmlFor="familyNo">I currently live independently</label>
          </div>

          <ErrorMsg field="living" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}