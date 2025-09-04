import "@/presentation/styles/global.css";
import { makeHome } from "@/main/factories/pages";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{makeHome()}</StrictMode>,
);
