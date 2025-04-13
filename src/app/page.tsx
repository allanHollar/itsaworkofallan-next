"use client";
// React
import { FC } from "react";

// Page Sections
import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import AboutMeBio from "@/components/organisms/AboutMeBio/AboutMeBio";
import CoreSkills from "@/components/organisms/CoreSkills/CoreSkills";
import WorkHistory from "@/components/organisms/WorkHistory/WorkHistory";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";

// Atoms
import HorizontalRule from "@/components/atoms/HorizontalRule";

const HomePage: FC = () => {
  return (
    <>
      <AppBanner />

      <AboutMeBio />
      <HorizontalRule />

      <CoreSkills />
      <HorizontalRule />

      <WorkHistory />
      <HorizontalRule />

      <ProjectsGrid />
      <HorizontalRule />
    </>
  );
};

export default HomePage;
