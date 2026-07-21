import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <App />

    <Toaster
      position="bottom-right"
      containerStyle={{
        top: 95,
        right: 20,
        pointerEvents: "none",
      }}
      toastOptions={{
        duration: 2000,
        style: {
          background: "#111827",
          color: "#fff",
          border: "1px solid #334155",
          borderRadius: "12px",
          pointerEvents: "auto",
        },
        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />

  </StrictMode>
);