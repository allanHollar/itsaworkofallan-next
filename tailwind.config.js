/** @type {import('tailwindcss').Config} */
const cdnBaseUrl = "https://ddxnp40hswui0.cloudfront.net";

module.exports = {
  content: [
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sky: `url('${cdnBaseUrl}/stars-bg.webp')`,
        "cat-running": `url(${cdnBaseUrl}/cat-running-sprites.webp)`,
        "cat-running-mobile": `url(${cdnBaseUrl}/cat-running-sprites-mobile.webp)`,
        clouds: `url('${cdnBaseUrl}/clouds.webp')`,
        "clouds-mid": `url('${cdnBaseUrl}/mid-clouds.webp')`,
        "clouds-mid-mobile": `url('${cdnBaseUrl}/mid-clouds-mobile.webp')`,
        moon: `url('${cdnBaseUrl}/moon.webp')`,
        "clouds-mobile": `url('${cdnBaseUrl}/clouds-mobile.webp')`,
        foreground: `url('${cdnBaseUrl}/foreground.webp')`,
        "foreground-me-gate": `url('${cdnBaseUrl}/foreground-me-gate.webp')`,
        "foreground-mobile": `url('${cdnBaseUrl}/foreground-mobile.webp')`,
        "foreground-me-gate-mobile": `url('${cdnBaseUrl}/foreground-me-gate-mobile.webp')`,
        "footer-image": `url('${cdnBaseUrl}/footer.webp')`,
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      screens: {
        sm: "667px",
      },
      opacity: ["disabled"],
    },
  },
};
