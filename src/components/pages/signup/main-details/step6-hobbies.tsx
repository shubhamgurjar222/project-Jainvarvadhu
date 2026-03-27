"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import ErrorMsg from "@/components/error/error-msg";
import { hobbiesData } from "@/data/hobbies";

type Details = {
  hobbies: string[];
};

type Errors = {
  hobbies?: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step5Main({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    hobbies: JSON.parse(sessionStorage.getItem("hobbies") || "[]"),
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setDetails((prev) => {
      let hobbies = [...prev.hobbies];

      if (checked) {
        if (hobbies.length >= 5) return prev;
        hobbies.push(value);
      } else {
        hobbies = hobbies.filter((hobby) => hobby !== value);
      }

      sessionStorage.setItem("hobbies", JSON.stringify(hobbies));
      return { hobbies };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};
    const totalSelected = details.hobbies.length;

    if (totalSelected === 0) {
      newErrors.hobbies = "Please select at least 1 hobby.";
    }

    if (totalSelected < 5) {
      newErrors.hobbies = `Please select ${5 - totalSelected} more hobbies.`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(details);
  };

  const totalSelected = details.hobbies.length;
  const limitReached = totalSelected >= 5;

  return (
    <div className="form-login">
      <h6>Let's add some your hobbies</h6>

      <form onSubmit={handleSubmit}>
        <h6 className="mt-3 mb-3 text-muted">
          Selected: {totalSelected} / 5
        </h6>

        {Object.entries(hobbiesData).map(([category, hobbies]) => (
          <div className="form-group" key={category}>
            <label className="text-capitalize">{category} Interests</label>

            <div className="d-flex flex-wrap gap-2">
              {(hobbies as any[]).map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.value}>
                    <input
                      className="btn-check-profile"
                      type="checkbox"
                      id={item.value}
                      value={item.value}
                      onChange={handleChange}
                      checked={details.hobbies.includes(item.value)}
                      disabled={!details.hobbies.includes(item.value) && limitReached}
                    />

                    <label className="profile-label" htmlFor={item.value}>
                      {Icon && <Icon size={15} />} &nbsp;
                      {item.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <ErrorMsg field="hobbies" errors={errors} />

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}