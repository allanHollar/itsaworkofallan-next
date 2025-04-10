import { FC } from "react";
import { useSingleProject } from "../../context/SingleProjectContext";

interface ProjectSingleHeaderProps {
  projectId: string;
}

const ProjectSingleHeader: FC<ProjectSingleHeaderProps> = ({ projectId }) => {
  const { singleProjectData } = useSingleProject();
  const projectData = singleProjectData[projectId];
  const { projectHeader } = projectData;

  if (!projectData) return null;

  return (
    <div className="mx-auto container">
      <h2 className="mb-4 pt-5 text-[#5A5A5A] text-3xl tracking-wide happy-monkey-regular">
        <span className="border-[#efd5b4] border-b-4">
          {projectHeader.title}
        </span>
      </h2>
      <div className="flex">
        <div className="flex items-center mr-5">
          <span>⏳ {projectHeader.tenure}</span>
        </div>

        <div className="flex items-center">
          <span>🥷🏼 {projectHeader.jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;
