"use client";

import { useEngagedSession } from "@/hooks/useEngagedSession";
import { usePageView } from "@/hooks/usePageView";
import { useScrollDepth } from "@/hooks/useScrollDepth";

const Analytics = () => {
  usePageView();
  useScrollDepth();
  useEngagedSession(60);

  return null;
};

export default Analytics;
