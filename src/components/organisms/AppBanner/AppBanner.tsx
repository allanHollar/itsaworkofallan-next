// Packages
import { useMemo } from "react";
import { motion } from "framer-motion";

// Components
import { PageHeading, BlurIn } from "@/components/atoms/TextAnimation";

// Styles
import "./fireflies.sass";

const AppBanner = () => {
  const fireflies = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => (
        <span key={i} className="firefly" />
      )),
    []
  );

  return (
    <motion.section
      id="hero-banner"
      transition={{ ease: "easeInOut" }}
      className="relative flex sm:flex-row flex-col justify-center sm:justify-between items-center bg-[#1B1212] bg-hero-image-mobile sm:bg-hero-image bg-cover bg-no-repeat bg-center h-[550px] sm:h-[750px] overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="hidden">Hello, I'm Allan</h1>
        <PageHeading
          text="Hello, I'm Allan"
          cssStyles="drop-shadow-md mt-[-30px] sm:mt-[-100px] text-5xl text-center text-white md:text-7xl happy-monkey-regular"
        />
        <BlurIn
          cssStyles={
            "sm:mt-[-25px] text-2xl text-center text-white sm:text-4xl dark:text-gray-200 leading-normal happy-monkey-regular"
          }
        >
          Senior Frontend Engineer & UX/UI Enthusiast!
        </BlurIn>
      </div>
      {fireflies}
    </motion.section>
  );
};

export default AppBanner;
