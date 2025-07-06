"use client";
import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/analytics/scrollDepth";

const SCROLL_THRESHOLDS = [25, 50, 75, 100];
let timeout: NodeJS.Timeout | null = null;

export const useScrollDepth = () => {
  useEffect(() => {
    const thresholdsFired: Record<number, boolean> = {};

    const handleScroll = () => {
      if (timeout) return;
      timeout = setTimeout(() => {
        timeout = null;

        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;

        SCROLL_THRESHOLDS.forEach((threshold) => {
          if (scrolled >= threshold && !thresholdsFired[threshold]) {
            thresholdsFired[threshold] = true;
            trackScrollDepth(threshold);
          }
        });
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
