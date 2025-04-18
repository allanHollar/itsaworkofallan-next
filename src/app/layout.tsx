// Core
import Script from "next/script";
import { Happy_Monkey, Lato } from "next/font/google";
import { cdnBaseUrl } from "@/config";

// Global styles
import "./globals.css";

// App layout wrapper
import ClientLayout from "./ClientLayout";

// Context
import Providers from "@/context/Providers";

export const metadata = {
  title: "It's a Work of Allan! 🙂",
  description:
    "Senior Frontend Engineer & UX/UI Enthusiast – Portfolio of Allan Ritumban",
  keywords: [
    "Frontend Engineer",
    "UX/UI",
    "Allan Ritumban",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Allan Ritumban" }],

  openGraph: {
    title: "It's a Work of Allan",
    description:
      "Senior Frontend Engineer & UX/UI Enthusiast – Portfolio of Allan Ritumban",
    url: "https://itsaworkofallan.me",
    type: "website",
    images: [
      {
        url: "https://itsaworkofallan.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "It's a Work of Allan – Portfolio Preview",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/favicon-180x180.png", sizes: "180x180" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "It's a Work of Allan",
    description:
      "Senior Frontend Engineer & UX/UI Enthusiast – Portfolio of Allan Ritumban",
    images: ["https://itsaworkofallan.me/og-image.jpg"],
  },

  other: {
    "link:preload": [
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-bg.jpg",
      },
    ],
  },
};

export const happyMonkey = Happy_Monkey({
  subsets: ["latin"],
  weight: "400", // Only one available for Happy Monkey
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Add any needed weights
  style: ["normal", "italic"], // Optional: only needed if you use italic
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GA */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z9MGEE3QZ8"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-Z9MGEE3QZ8");
        `,
          }}
        ></Script>
        <link rel="preload" as="image" href={`${cdnBaseUrl}/hero-bg.jpg`} />
        <link rel="preload" as="image" href={`${cdnBaseUrl}/footer.webp`} />
      </head>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
