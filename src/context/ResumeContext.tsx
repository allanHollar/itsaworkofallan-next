"use client";
import { useState, createContext, useContext, ReactNode } from "react";

import { resumeData } from "../data/resumeData";
import { Resume } from "../types/types";

interface ResumeContextType {
  resume: Resume;
}

interface ResumeProviderProps {
  children: ReactNode;
}

const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider = ({ children }: ResumeProviderProps) => {
  const [resume] = useState(resumeData);

  return (
    <ResumeContext.Provider
      value={{
        resume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useREsumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }
  return context;
};

export default ResumeContext;
