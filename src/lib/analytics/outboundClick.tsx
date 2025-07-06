import { gaTrackingID } from "@/config";

export const trackOutboundClick = (url: string, linkText?: string) => {
  if (!window.gtag || !gaTrackingID) return;

  window.gtag("event", "outbound_click", {
    link_url: url,
    link_text: linkText || "unknown",
  });
};
