"use client";

import { ReactNode } from "react";
import { AboutMeProvider } from "@/context/AboutMeContext";
import { ResumeProvider } from "./ResumeContext";
// import { ProjectsProvider } from "./ProjectsContext";
// import { SingleProjectProvider } from "./SingleProjectContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AboutMeProvider>
      <ResumeProvider>{children}</ResumeProvider>
    </AboutMeProvider>
  );
}
