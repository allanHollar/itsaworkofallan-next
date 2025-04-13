"use client";
// Core
import { Suspense } from "react";

// Next.js
import { usePathname } from "next/navigation";

// Components
import AppHeader from "@/components/organisms/AppHeader";
import AppFooter from "@/components/organisms/AppFooter/AppFooter";
import AppPreFooter from "@/components/organisms/AppPreFooter/AppPreFooter";

// Utilities
import ScrollToTop from "@/utilities/ScrollToTop";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="top-0 pt-[74px] w-full">
      <div key={pathname}>
        <ScrollToTop />
        <AppHeader />
        <Suspense>{children}</Suspense>
        <AppPreFooter />
        <AppFooter />
      </div>
    </div>
  );
}
