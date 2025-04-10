import { FC } from "react";
import { motion } from "framer-motion";

interface ProjectSingleProps {
  title: string;
  category: string;
  image: string;
}

const ProjectSingle: FC<ProjectSingleProps> = ({ title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      <div className="shadow-md hover:shadow-xl transition-all cursor-pointer">
        <div>
          <img
            src={image}
            className="border-none"
            alt={`Screenshot of ${title} project`}
          />
        </div>
        <div className="px-4 py-6 text-base text-center sm:text-sm">
          <p>{title}</p>
          <span>{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
