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
        "sky-image": "url('/images/cloud-bg.webp')",
        "hero-image": `url('${cdnBaseUrl}/hero.webp')`,
        "hero-image-mobile": `url('${cdnBaseUrl}/hero-mobile.webp')`,
        "footer-image": `url('${cdnBaseUrl}/footer.webp')`,
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      opacity: ["disabled"], // Moved from variants to extend
    },
  },
};
