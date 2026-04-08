"use client";

import { useState, useRef, ChangeEvent, SyntheticEvent } from "react";
import ErrorMsg from "@/components/error/error-msg";
import { educationLevel } from "@/data/educationLevel";
import { fetchResources } from "@/lib/fetchResources";

type Details = {
  highestqualification: string;
  collegeName: string;
};

type Errors = {
  highestqualification?: string;
  collegeName?: string;
};

type College = {
  id: number;
  college_name: string;
};

type Props = {
  onSubmit: (data: Details) => void;
};

export default function Step3Main({ onSubmit }: Props) {
  const [details, setDetails] = useState<Details>({
    highestqualification: sessionStorage.getItem("highestqualification") || "",
    collegeName: sessionStorage.getItem("collegeName") || "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [results, setResults] = useState<College[]>([]);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!details.highestqualification) {
      newErrors.highestqualification = "Please select a highest qualification.";
    }
    if (!details.collegeName) {
      newErrors.collegeName = "Please enter a college name.";
    }
    return newErrors;
  };

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = async (value: string) => {
    setDetails((prev) => ({ ...prev, collegeName: value }));
    sessionStorage.setItem("collegeName", value);

    const formData = new FormData();
    formData.append("name", value);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      if (value.length < 3) {
        setResults([]);
        return;
      }

      try {
        const response: any = await fetchResources("/searchCollegesByName", formData);
        if (response && typeof response === "object" && "data" in response) {
          setResults(response.data || []);
        }
      } catch (err) {
        console.error(err);
      }
    }, 400);
  };

  const handleSelectCollege = (college: string) => {
    setDetails((prev) => ({ ...prev, collegeName: college }));
    sessionStorage.setItem("collegeName", college);
    setResults([]);

    if (errors.collegeName) {
      setErrors((prev) => ({ ...prev, collegeName: "" }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    if (id === "highestqualification") {
      sessionStorage.setItem("highestqualification", value);
      setDetails((prev) => ({ ...prev, highestqualification: value }));

      if (errors.highestqualification) {
        setErrors((prev) => ({ ...prev, highestqualification: "" }));
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
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative">
          <label htmlFor="collegeName">College Name</label>
          <input 
            type="text"
            id="collegeName"
            className="form-control"
            value={details.collegeName}
            placeholder="Search College here you attended"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSearch(e.target.value)
            }
          />

          {results.length > 0 && (
            <ul className="autocomplete-list college-dropdown">
              {results.map((college) => (
                <li key={college.id} onClick={() => handleSelectCollege(college.college_name)}>{college.college_name}</li>
              ))}
            </ul>
          )}

          <ErrorMsg field="collegeName" errors={errors} />
        </div>

        <div className="form-group">
          <label htmlFor="highestqualification">Highest Qualification</label>
          <select className="form-select" id="highestqualification" onChange={handleChange} value={details.highestqualification} >
            <option value="">Select Highest Qualification</option>
            {Object.entries(educationLevel).map(
              ([category, items]) => (
                <optgroup key={category} label={category}>
                  {(items as any[]).map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </optgroup>
              )
            )}
          </select>

          <ErrorMsg field="highestqualification" errors={errors} />
        </div>

        <button className="btn btn-primary mt-3" type="submit">Continue</button>
      </form>
    </div>
  );
}