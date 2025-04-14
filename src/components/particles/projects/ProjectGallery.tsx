"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { useSingleProject } from "@/context/SingleProjectContext";
import { ProjectImages } from "@/types/types";
import Image from "next/image";

interface ProjectGalleryProps {
  projectId: string;
}

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectGallery: FC<ProjectGalleryProps> = ({ projectId }) => {
  const { singleProjectData } = useSingleProject();
  const projectData = singleProjectData[projectId];

  return (
    <div className="mx-auto container">
      <div className="sm:gap-10 grid grid-cols-1 sm:grid-cols-3 mt-12">
        {projectData.projectImages.map((project: ProjectImages) => {
          return (
            <div
              className="flex justify-center items-center mb-10 sm:mb-0"
              key={project.id}
            >
              <motion.div
                key={projectId}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  key={project.id}
                  width={336}
                  height={293}
                  priority
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;
