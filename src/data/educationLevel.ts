type EducationItem = {
  value: string;
  label: string;
};

type EducationLevel = {
  [category: string]: EducationItem[];
};

export const educationLevel: EducationLevel = {
  Engineering: [
    { value: "B.E / B.Tech", label: "B.E / B.Tech" },
    { value: "M.E / M.Tech", label: "M.E / M.Tech" },
    { value: "M.S Engineering", label: "M.S Engineering" },
    { value: "B.Eng (Hons)", label: "B.Eng (Hons)" },
    { value: "M.Eng (Hons)", label: "M.Eng (Hons)" },
    { value: "Engineering Diploma", label: "Engineering Diploma" },
    { value: "AE", label: "AE" },
    { value: "AET", label: "AET" },
    { value: "A.M.E.", label: "A.M.E." },
    { value: "B.Plan", label: "B.Plan" },
    { value: "B.Tech LL.B.", label: "B.Tech LL.B." },
    { value: "CISE", label: "CISE" },
    { value: "ITIL", label: "ITIL" },
    { value: "M.Plan", label: "M.Plan" }
  ],

  "Arts / Design": [
    { value: "B.A", label: "B.A" },
    { value: "B.Ed", label: "B.Ed" },
    { value: "BJMC", label: "BJMC" },
    { value: "BFA", label: "BFA" },
    { value: "B.Arch", label: "B.Arch" },
    { value: "B.Des", label: "B.Des" },
    { value: "BMM", label: "BMM" },
    { value: "MFA", label: "MFA" },
    { value: "M.Ed", label: "M.Ed" },
    { value: "M.A", label: "M.A" },
    { value: "MSW", label: "MSW" },
    { value: "MJMC", label: "MJMC" },
    { value: "M.Arch", label: "M.Arch" },
    { value: "M.Des", label: "M.Des" }
  ],

  "Finance / Commerce": [
    { value: "B.Com", label: "B.Com" },
    { value: "CA / CPA", label: "CA / CPA" },
    { value: "CFA", label: "CFA" },
    { value: "CS", label: "CS" },
    { value: "BSc / BFin", label: "BSc / BFin" },
    { value: "M.Com", label: "M.Com" },
    { value: "MSc / MFin / MS", label: "MSc / MFin / MS" },
    { value: "BCom (Hons)", label: "BCom (Hons)" },
    { value: "PGD Finance", label: "PGD Finance" }
  ],

  Management: [
    { value: "BBA", label: "BBA" },
    { value: "BHM", label: "BHM" },
    { value: "BBM", label: "BBM" },
    { value: "MBA", label: "MBA" },
    { value: "PGDM", label: "PGDM" }
  ],

  "Computers / IT": [
    { value: "BCA", label: "BCA" },
    { value: "B.IT", label: "B.IT" },
    { value: "BCS", label: "BCS" },
    { value: "BA Computer Science", label: "BA Computer Science" },
    { value: "MCA", label: "MCA" },
    { value: "PGDCA", label: "PGDCA" }
  ],

  Medicine: [
    { value: "MBBS", label: "MBBS" },
    { value: "BDS", label: "BDS" },
    { value: "BPT", label: "BPT" },
    { value: "BAMS", label: "BAMS" },
    { value: "BHMS", label: "BHMS" },
    { value: "B.Pharma", label: "B.Pharma" },
    { value: "BVSc", label: "BVSc" }
  ],

  Law: [
    { value: "BL / LLB", label: "BL / LLB" },
    { value: "ML / LLM", label: "ML / LLM" },
    { value: "LLB (Hons)", label: "LLB (Hons)" },
    { value: "B.A. LL.B.", label: "B.A. LL.B." }
  ],

  Doctorate: [
    { value: "Ph.D", label: "Ph.D" },
    { value: "M.Phil", label: "M.Phil" },
    { value: "D.Litt", label: "D.Litt" },
    { value: "LL.D.", label: "LL.D." },
    { value: "Pharm.D", label: "Pharm.D" }
  ],

  "Non-Graduate": [
    { value: "High school", label: "High school" },
    { value: "Less than high school", label: "Less than high school" },
    { value: "Diploma in Trade School", label: "Diploma in Trade School" }
  ]
};