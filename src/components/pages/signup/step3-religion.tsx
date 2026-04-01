"use client";

import { useState } from "react";
import { Country } from "country-state-city";
import ErrorMsg from "@/components/error/error-msg";

type Details = {
  community: string;
  country: string;
};

type Errors = {
  community?: string;
  country?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step3Religion({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    community: sessionStorage.getItem("community") || "",
    country: sessionStorage.getItem("country") || "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const countries = Country.getAllCountries();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    if (id === "community") {
      setDetails({ ...details, community: value });
      sessionStorage.setItem(id, value);
      if (errors.community) setErrors((prev) => ({ ...prev, community: "" }));

    } if (id === "country") {
      setDetails({ ...details, country: value });
      sessionStorage.setItem(id, value);
      if (errors.country) setErrors((prev) => ({ ...prev, country: "" }));

    }
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.community) newErrors.community = "Please select a community.";
    if (!details.country) newErrors.country = "Please select a country.";
    return newErrors;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
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
      <form autoComplete="on" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="community">Community</label>
          <select className="form-control1" name="community" id="community" onChange={handleChange} value={details.community}>
            <option value="">Select Community</option>
            <option value="Digamber">Digamber</option>
            <option value="Shwetamber">Shwetamber</option>
          </select>
          <ErrorMsg field="community" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="country">Living in</label>
          <select className="form-control1" name="country" id="country" onChange={handleChange} value={details.country}>
            <option value="">Select Country</option>
            {countries.map((c, index) => (
              <option key={index} value={c.name}>{c.name}</option>
            ))}
          </select>
          <ErrorMsg field="country" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}