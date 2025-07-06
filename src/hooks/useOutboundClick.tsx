"use client";

import { trackOutboundClick } from "@/lib/analytics/outboundClick";

export const useOutboundClick = () => {
  const handleClick = (url: string, linkText?: string) => {
    trackOutboundClick(url, linkText);
  };

  return handleClick;
};
