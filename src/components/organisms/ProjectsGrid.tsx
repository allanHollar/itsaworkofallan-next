"use client";
// Core
import { FC } from "react";

// Third-party
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// App
import { useProjects } from "@/context/ProjectsContext";
import { cdnBaseUrl } from "@/config";
import ProjectSingle from "@/components/particles/projects/ProjectSingle";

const HappyNinja = `${cdnBaseUrl}/happy-ninja.webp`;

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

const ProjectsGrid: FC = () => {
  const { projects } = useProjects();

  return (
    <section
      id="projects"
      className="mx-auto mt-8 sm:mt-10 py-5 sm:py-10 container"
    >
      <div className="text-center">
        <h3 className="mb-5 text-[#5A5A5A] text-4xl tracking-wide happy-monkey-regular">
          <span className="border-[#efd5b4] border-b-4">Built & Shipped!</span>
        </h3>

        <Image
          className="block mx-auto mb-5"
          src={HappyNinja}
          alt="Happy Ninja"
          width={100}
          height={100}
        />
      </div>

      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(projects).map(([projectId, projectData]) => (
          <motion.div
            key={projectId}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href={`/projects/${projectId}`}
              className="mb-10 sm:mb-0 last:mb-0"
            >
              <ProjectSingle
                title={projectData.title}
                category={projectData.category}
                image={projectData.img}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
