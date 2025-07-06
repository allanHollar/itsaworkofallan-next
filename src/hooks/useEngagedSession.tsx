"use client";

import { useEffect } from "react";
import { trackEngagedSession } from "@/lib/analytics/engagedSession";

export const useEngagedSession = (timeoutSeconds = 60) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      trackEngagedSession(timeoutSeconds);
    }, timeoutSeconds * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeoutSeconds]);
};
