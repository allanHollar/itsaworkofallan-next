"use client";
import { useState, useContext, createContext, ReactNode } from "react";
import { projectsData } from "../data/projects";
import { ProjectData } from "../types/types";

interface ProjectsContextType {
  projects: ProjectData;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects] = useState(projectsData);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export default ProjectsContext;
