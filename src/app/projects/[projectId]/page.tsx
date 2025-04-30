"use client";
// React & Framer Motion
import { FC, use } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[991px]"
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
    >
      <SingleProjectProvider>
        <ProjectHeader projectId={projectId} />
        <ProjectGallery projectId={projectId} />
        <ProjectInfo projectId={projectId} />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;
