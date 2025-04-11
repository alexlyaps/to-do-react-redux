import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { About } from "@/components/ui/about.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/#about" element={<About />} />
    </Routes>
  </HashRouter>
);
