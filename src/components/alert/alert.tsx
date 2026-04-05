"use client";
import { useState } from "react";
import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from "lucide-react";


type AlertVariant = "info" | "success" | "error";

interface AlertProps {
  title?:       string;
  message:      string;
  variant?:     AlertVariant;  
  dismissible?: boolean;       
  onDismiss?:   () => void;
}

const STYLES = {
  info: {
    wrapper:   "bg-warning-subtle custom-border-info",
    text:      "text-blue-900",
    label:     "text-blue-700",
    iconWrap:  "bg-blue-100 text-blue-700",
    btnWrap:   "close-btn-info",
    icon:      <Info size={40} />,
  },
  success: {
    wrapper:   "bg-success bg-success-subtle border border-success border-2",
    text:      "text-green-900",
    label:     "text-green-700",
    iconWrap:  "bg-green-100 text-green-700",
    btnWrap:   "close-btn-success",
    icon:      <CheckCircle size={40} color="green" />,
  },
  error: {
    wrapper:   "bg-danger bg-danger-subtle border border-danger border-2",
    text:      "text-red-900",
    label:     "text-red-700",
    iconWrap:  "bg-red-100 text-red-700",
    btnWrap:   "close-btn-error",
    icon:      <AlertCircle size={40} color="red" />,
  },
};

export default function Alert({ message, variant = "info", title, dismissible = false, onDismiss, }: AlertProps) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading]   = useState(false);

  const s = STYLES[variant];

  function handleDismiss() {
    setFading(true);
    setTimeout(() => {
      onDismiss?.();     
    }, 300);
  }

  if (!visible) return null;

  return (
    <div
      role="alert"
      style={{ opacity: fading ? 0 : 1, transition: "opacity 300ms" }}
      className={`d-flex align-items-start gap-3 rounded-lg p-3 z-3 alert-position ${s.wrapper}`}>

      <span className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full ${s.iconWrap}`}>
        {s.icon}
      </span>

      <div className="flex-1">
        {title && <p className={`text-sm font-semibold mb-0.5 ${s.label}`}>{title}</p>}
        <p className={`text-sm ${s.text}`}>{message}</p>
      </div>

      {dismissible && (
        <button onClick={handleDismiss} aria-label="Dismiss" className={`opacity-60 hover:opacity-100 ${s.iconWrap} ${s.btnWrap}`}>
          <X size={25} color="#ffffff" strokeWidth={3} />
        </button>
      )}
    </div>
  );
}