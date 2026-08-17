import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DamageLab } from "@/src/features/calculator/damage-lab";
import "@/app/globals.css";

const root = document.getElementById("root");

if (!root) throw new Error("Damage Lab could not find its application root.");

createRoot(root).render(
  <StrictMode>
    <TooltipProvider>
      <DamageLab />
    </TooltipProvider>
  </StrictMode>,
);
