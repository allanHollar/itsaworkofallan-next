"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial={false} animate={{}} exit={{}}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
