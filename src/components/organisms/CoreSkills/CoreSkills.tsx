"use client";
// Third-party libraries
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Context
import { useREsumeContext } from "@/context/ResumeContext";

// Components
import CuteDog from "@/components/particles/CuteDog/CuteDog";
import { TextFade } from "@/components/atoms/TextAnimation";

// Types
import { LanguageItem } from "@/types/types";

const AnimatedProgressBar = ({ resume }: { resume: LanguageItem }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const scale = resume.completed / 100;

  return (
    <div className="mb-4 w-full" ref={ref}>
      <div
        style={{
          backgroundColor: "#f5e8d7",
          height: "45px",
          width: "97%",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? scale : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            transformOrigin: "left",
            backgroundColor: resume.bgColor,
            height: "100%",
            width: "100%", // full width, we're scaling it
          }}
        />
      </div>
    </div>
  );
};

const CoreSkills = () => {
  const { resume } = useREsumeContext();

  return (
    <div
      id="core-skills"
      className="flex sm:flex-row flex-col sm:gap-3 mx-auto py-10 sm:pt-20 container"
    >
      <div className="w-full sm:w-1/4">
        <h3 className="mb-5 font-semibold text-[#5A5A5A] text-3xl text-center sm:text-[24px] sm:text-left tracking-wide happy-monkey-regular">
          <span className="border-[#efd5b4] border-b-4">Core Skills</span>
        </h3>
        <CuteDog />
      </div>

      <div className="pb-3 sm:pb-5 w-full sm:w-3/4">
        <div className="flex justify-center items-center mb-10">
          <ul className="w-full">
            {resume.languages.map((resumeItem: LanguageItem) => (
              <li key={resumeItem.id}>
                <p className="mb-2 font-semibold text-[16px]">
                  {resumeItem.title}
                </p>
                <AnimatedProgressBar resume={resumeItem} />
              </li>
            ))}
          </ul>
        </div>

        <TextFade direction="up">
          <ul className="block mb-10 leading-relaxed">
            <li className="inline-block mr-1 underline">
              Technologies and Tools:&nbsp;
            </li>
            {resume.technologiesAndTools.map(
              (techTool: string, index: number) => (
                <li className="inline-block" key={index}>
                  {techTool}
                  {index < resume.technologiesAndTools.length - 1 && ",\u00A0"}
                </li>
              )
            )}
          </ul>
        </TextFade>

        <TextFade direction="up">
          <ul className="block leading-relaxed">
            <li className="inline-block mr-1 underline">Soft Skills:&nbsp;</li>
            {resume.softSkills.map((friendlySkills: string, index: number) => (
              <li className="inline-block" key={index}>
                {friendlySkills}
                {index < resume.softSkills.length - 1 && ",\u00A0"}
              </li>
            ))}
          </ul>
        </TextFade>
      </div>
    </div>
  );
};

export default CoreSkills;
