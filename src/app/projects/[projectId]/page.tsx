"use client";
// React & Framer Motion
import { FC, use } from "react";

// Project Components
import ProjectHeader from "@/components/particles/projects/ProjectHeader";
import ProjectGallery from "@/components/particles/projects/ProjectGallery";
import ProjectInfo from "@/components/particles/projects/ProjectInfo";

// Context
import { SingleProjectProvider } from "@/context/SingleProjectContext";

type ProjectSingleProps = {
  params: Promise<{
    projectId: string;
  }>;
};

const ProjectSingle: FC<ProjectSingleProps> = ({ params }) => {
  const { projectId } = use(params);

  if (!projectId) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-[991px]">
      <SingleProjectProvider>
        <ProjectHeader projectId={projectId} />
        <ProjectGallery projectId={projectId} />
        <ProjectInfo projectId={projectId} />
      </SingleProjectProvider>
    </div>
  );
};

export default ProjectSingle;
