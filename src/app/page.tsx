import { FC } from "react";
import AboutMeBio from "@/components/organisms/AboutMeBio/AboutMeBio";
import CoreSkills from "@/components/organisms/CoreSkills/CoreSkills";
import WorkHistory from "@/components/organisms/WorkHistory/WorkHistory";
import HorizontalRule from "@/components/atoms/HorizontalRule";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import AppPreFooter from "@/components/organisms/AppPreFooter/AppPreFooter";
import AppFooter from "@/components/organisms/AppFooter/AppFooter";

const HomePage: FC = () => {
  return (
    <>
      <AboutMeBio />
      <HorizontalRule />

      <CoreSkills />
      <HorizontalRule />

      <WorkHistory />
      <HorizontalRule />

      <ProjectsGrid />
      <HorizontalRule />

      <AppPreFooter />
      <AppFooter />
    </>
  );
};

export default HomePage;
