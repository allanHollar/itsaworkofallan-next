import { FC } from "react";
import { useSingleProject } from "@/context/SingleProjectContext";
import { TextFade } from "@/components/atoms/TextAnimation";

interface ProjectInfoProps {
  projectId: string;
}

const ProjectInfo: FC<ProjectInfoProps> = ({ projectId }) => {
  const { singleProjectData } = useSingleProject();
  const projectData = singleProjectData[projectId];

  if (!projectData) return null;

  const { projectInfo } = projectData;

  return (
    <div className="mx-auto container">
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <TextFade direction="up">
              <h4 className="mb-1 font-semibold tracking-wide">
                {projectInfo.clientHeading}
              </h4>
              <ul className="leading-loose tracking-wide">
                {projectInfo.companyInfo.map((info) => {
                  return (
                    <li key={info.id}>
                      {info.title === "Website" ? (
                        <>
                          <a className="truncate" href={info.details}>
                            {info.emoji}: {info.details}
                          </a>{" "}
                        </>
                      ) : (
                        <>
                          {info.emoji}: {info.details}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </TextFade>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <TextFade direction="up">
              <p className="leading-loose tracking-wide">
                {projectInfo.technologies[0].emoji}:{" "}
                {projectInfo.technologies[0].techs.join(", ")}
              </p>
            </TextFade>
          </div>
        </div>

        {/*  Single project right section */}
        <div className="mt-10 sm:mt-0 w-full sm:w-2/3 text-left">
          <TextFade direction="up">
            <h3 className="mb-5 text-xl tracking-wide">
              {projectInfo.projectDetailsHeader}
            </h3>
            {projectInfo.projectDetails.map((details) => {
              return (
                <p className="mb-4 leading-loose" key={details.id}>
                  {details.details}
                </p>
              );
            })}
          </TextFade>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
