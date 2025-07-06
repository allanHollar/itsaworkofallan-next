import { gaTrackingID } from "@/config";

export const trackPageView = (url: string) => {
  if (!window.gtag || !gaTrackingID) return;

  window.gtag("event", "page_view", {
    page_path: url,
  });
};
