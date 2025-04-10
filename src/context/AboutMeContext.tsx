"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { AboutMeItem } from "../types/types";

interface AboutMeContextType {
  aboutMe: AboutMeItem[];
  setAboutMe: React.Dispatch<React.SetStateAction<AboutMeItem[]>>;
}

interface AboutMeProviderProps {
  children: ReactNode;
}

const AboutMeContext = createContext<AboutMeContextType | null>(null);

export const AboutMeProvider = ({ children }: AboutMeProviderProps) => {
  const [aboutMe, setAboutMe] = useState<AboutMeItem[]>(aboutMeData);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export const useAboutMe = () => {
  const context = useContext(AboutMeContext);
  if (!context) {
    throw new Error("useAboutMe must be used within an AboutMeProvider");
  }
  return context;
};

export default AboutMeContext;
