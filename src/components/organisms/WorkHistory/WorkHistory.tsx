"use client";

import { useREsumeContext } from "@/context/ResumeContext";
import CoffeeCup from "@/components/particles/CoffeeCup/CoffeeCup";
import { TextFade } from "@/components/atoms/TextAnimation";

const WorkHistory = () => {
  const { resume } = useREsumeContext();

  return (
    <div
      id="work-history"
      className="flex sm:flex-row flex-col justify-center sm:justify-start sm:gap-3 mx-auto mb-5 pt-10 sm:pt-20 pb-0 container"
    >
      <div className="mb-5 sm:mb-0 w-full sm:w-1/4">
        <h3 className="mb-5 font-semibold text-[#5A5A5A] text-3xl text-center sm:text-[24px] sm:text-left tracking-wide happy-monkey-regular">
          <span className="border-[#efd5b4] border-b-4">Work History</span>
        </h3>
        <div className="flex justify-center sm:justify-start">
          <CoffeeCup />
        </div>
      </div>

      <div className="pb-3 sm:pb-5 w-full sm:w-3/4">
        {resume.workHistory.map((workItem, index) => (
          <div key={index} className="mb-5 leading-relaxed">
            <TextFade direction="up">
              <h4 className="font-semibold text-xl tracking-wide">
                {workItem.company}
              </h4>

              <p className="mb-5 text-base italic">
                {workItem.jobTitle} - {workItem.tenure}
              </p>

              <ul className="mb-7 ml-3 list-disc">
                {workItem.responsibilities.map((responsibility, index) => (
                  <li key={index} className="mb-3">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </TextFade>

            {index !== resume.workHistory.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
