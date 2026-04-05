"use client";

import { useState, useRef, useEffect, ChangeEvent, DragEvent, SyntheticEvent } from "react";
import { Check, X, Upload, Image } from "lucide-react";

type Errors = {
  image?: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

export default function PhotoUpload({ onSubmit }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => { 
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!file) {
      newErrors.image = "Please upload an image.";
    }
    return newErrors;
  };

  const isValidFile = (selectedFile: File) => {
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Max file size is 5MB");
      return false;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(selectedFile.type)) {
      alert("Only JPG, PNG, WEBP allowed");
      return false;
    }

    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile || !isValidFile(selectedFile)) return;

    setFile(selectedFile);
    setFileName(selectedFile.name);

    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(selectedFile));

    if (errors.image) setErrors((prev) => ({ ...prev, image: "" }));
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);

    const selectedFile = e.dataTransfer.files[0];
    if (!selectedFile || !isValidFile(selectedFile)) return;

    if (inputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(selectedFile);
      inputRef.current.files = dt.files;
    }

    setFile(selectedFile);
    setFileName(selectedFile.name);

    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const clearFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (preview) URL.revokeObjectURL(preview);

    if (inputRef.current) inputRef.current.value = "";

    setFile(null);
    setFileName("");
    setPreview(null);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!file) return;

    const formData = new FormData();
    formData.append("name", file);
    onSubmit(formData);

  };

  return (
    <div className="container py-4">
      <div className="text-center form-login">
        <h5 className="mb-1">Congrats! Your Profile has been created.</h5>
        <p className="text-secondary mb-4">Upload Photo and get better Matches</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div
              className={`border rounded-3 p-4 mb-2 position-relative ${
                dragOver
                  ? "border-primary bg-primary bg-opacity-10"
                  : preview
                  ? "border-success bg-success bg-opacity-10"
                  : "border-dashed"
              }`}
              style={{ borderStyle: dragOver || preview ? "solid" : "dashed",
                borderWidth: "2px",
                cursor: "pointer",
                transition: "all .2s ease"
              }}
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.value = "";
                  inputRef.current.click();
                }
              }}
              onDragOver={(e) => {e.preventDefault(); setDragOver(true);}}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}>
              <input ref={inputRef} type="file" id="imageUpload" accept="image/*" className="d-none" name="image" onChange={handleChange}/>

              {preview ? (
                <div className="d-flex align-items-center gap-3 text-start">
                  <img src={preview} alt="Preview" className="rounded-2 object-fit-cover flex-shrink-0" style={{ width: 64, height: 64 }}/>
                  <div className="flex-grow-1 overflow-hidden">
                    <p className="mb-0 fw-medium text-truncate small">{fileName}</p>
                    <p className="mb-0 text-success small"><Check size={15} className="me-1" />Ready to upload</p>
                  </div>
                  <button type="button" className="btn btn-sm btn-outline-danger rounded-circle p-1 lh-1 flex-shrink-0" aria-label="Remove" onClick={clearFile} style={{ width: 28, height: 28 }}>
                    <X size={15} />
                  </button>
                </div>
              ) : (
                <div className="py-2">
                  <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-3 ${
                      dragOver
                        ? "bg-primary text-white"
                        : "bg-primary bg-opacity-10 text-primary"
                    }`}
                    style={{ width: 48, height: 48 }}>
                    {dragOver ? <Upload size={20} /> : <Image size={20} />}
                  </div>

                  <p className="mb-1 fw-medium small">
                    { dragOver ? "Drop your photo here" : "Click to browse or drag & drop" }
                  </p>

                  <p className="mb-0 text-secondary" style={{ fontSize: ".75rem" }}>JPG, PNG, WEBP · Max 5 MB </p>
                </div>
              )}
            </div>

            { errors.image && ( <p className="text-danger small mb-0 text-start"><X size={15} className="me-1" />{errors.image}</p>)}
          </div>

          <button className="btn btn-primary mt-3 px-4" type="submit"><Upload size={15} className="me-2" />Upload Photo</button>

        </form>

        <hr />

        <div className="text-start mt-4">
          <h6 className="mb-3">Photo guidelines</h6>
          <div className="mt-3">
            <p className="text-success mb-1 d-flex align-items-center gap-1 fw-medium small"><Check size={15} /> Do's</p>
            <ul className="list-unstyled small text-secondary ps-1">
              <li className="li-none">Your photo should be front-facing with entire face visible.</li>
              <li className="li-none">Ensure your photo is recent and not with a group.</li>
              <li className="li-none">Each photo must be less than 5 MB.</li>
            </ul>
          </div>

          <div className="mt-3">
            <p className="text-danger mb-1 d-flex align-items-center gap-1 fw-medium small"><X size={15} /> Don'ts</p>
            <ul className="list-unstyled small text-secondary ps-1">
              <li className="li-none">Watermarked or edited photos will be rejected.</li>
              <li className="li-none">Irrelevant photographs may lead to deactivation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}