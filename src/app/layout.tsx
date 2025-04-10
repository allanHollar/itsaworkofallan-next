// Global styles
import "./globals.css";

// App layout wrapper
import ClientLayout from "./ClientLayout";

// Context
import Providers from "@/context/Providers";

export const metadata = {
  title: "It's a Work of Allan",
  description: "Frontend portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Fonts Stylesheets */}
        <link
          href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Happy+Monkey&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Font Preload (Optional but Optimized) */}
        <link
          rel="stylesheet"
          href="https://fonts.gstatic.com/s/happymonkey/v16/K2F2fZZcl-9SXwl5F_C4R_O8kLQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
