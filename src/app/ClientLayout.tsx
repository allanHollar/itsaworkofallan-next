"use client";

// Core
import { Suspense } from "react";

// Next.js
import { usePathname } from "next/navigation";

// Components
import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import AppHeader from "@/components/organisms/AppHeader";

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
        <AppBanner />
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
