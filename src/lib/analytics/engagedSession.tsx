import { gaTrackingID } from "@/config";

export const trackEngagedSession = (duration: number = 60) => {
  if (!window.gtag || !gaTrackingID) return false;

  window.gtag("event", "engaged_session", {
    engagement_time_msec: duration * 1000,
  });
};
