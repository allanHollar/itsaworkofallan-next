"use client";

import { trackProjectView } from "@/lib/analytics/projectView";

export const useProjectView = () => {
  const handleClick = (projectName: string) => {
    trackProjectView(projectName);
  };

  return handleClick;
};
