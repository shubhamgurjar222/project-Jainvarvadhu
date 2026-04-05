'use client';

import { createContext, useContext, useState } from "react";
import Alert from "@/components/alert/alert";

const AlertContext = createContext<any>(null);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<any>(null);

  const showAlert = ( title: string, message: string, variant: string = "info", dismissible: boolean = true) => {
    setAlert({ title, message, variant, dismissible });
    setTimeout(() => setAlert(null), 10000);
  };

  const hideAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      
      {children}
      {alert && <Alert title={alert.title} message={alert.message} variant={alert.variant} dismissible={alert.dismissible} onDismiss={hideAlert} />}

    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}