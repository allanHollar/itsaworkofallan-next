import { gaTrackingID } from "@/config";

export const trackProjectView = (projectName: string) => {
  if (!window.gtag || !gaTrackingID) return false;

  window.gtag("event", "project_view", {
    project_name: projectName,
  });
};
