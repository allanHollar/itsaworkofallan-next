"use client";
import { useEffect } from "react";

const ScrollRestorationDisabler = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      window.history.scrollRestoration = "auto"; // reset if unmounted
    };
  }, []);

  return null;
};

export default ScrollRestorationDisabler;
