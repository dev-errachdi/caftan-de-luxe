"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#111111",
          color: "#FAF8F2",
          border: "1px solid #B89A55",
          borderRadius: "0",
          padding: "16px 20px",
          fontSize: "13px",
          letterSpacing: "0.1em",
          fontFamily: "Inter, sans-serif",
        },
        success: {
          iconTheme: {
            primary: "#B89A55",
            secondary: "#111111",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#111111",
          },
        },
      }}
    />
  );
}