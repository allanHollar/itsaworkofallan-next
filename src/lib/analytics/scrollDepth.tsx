import { gaTrackingID } from "@/config";

export const trackScrollDepth = (percent: number) => {
  console.log(`Scroll Depth Event: ${percent}%`);
  if (!window.gtag || !gaTrackingID) return;

  window.gtag("event", "scroll_depth", {
    percent_scrolled: percent,
  });
};
