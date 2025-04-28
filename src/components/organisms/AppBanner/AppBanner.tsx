"use client";

// Packages
import { useMemo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Components
import Stars from "@/components/particles/Stars";
import { PageHeading, BlurIn } from "@/components/atoms/TextAnimation";

// Styles
import "./fireflies.sass";

const AppBanner = () => {
  const fireflies = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => (
        <span key={i} className="z-10 firefly" />
      )),
    []
  );

  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        controls.set({ x: "-100%" }); // ✅ start offscreen left
        await controls.start({
          x: "0%", // ✅ slide to original position (rightward)
          transition: { duration: 30, ease: "linear" },
        });
      }
    };
    loop();
  }, [controls]);

  return (
    <div className="bg-[#faf4eb] w-full">
      <motion.section
        id="hero-banner"
        transition={{ ease: "easeInOut" }}
        className="relative flex sm:flex-row flex-col justify-center sm:justify-between items-center bg-sky mx-auto max-w-[2048px] h-[850px] sm:h-[800px] overflow-hidden"
      >
        <Stars />
        <motion.div
          className="top-0 left-[54%] absolute bg-moon"
          initial={{ x: -300, y: "55%" }} // Start bottom-left of the anchor
          animate={{ x: 0, y: 0 }} // Rise diagonally into position
          transition={{
            duration: 10,
          }}
        />

        <motion.div
          animate={controls}
          className="top-0 left-0 z-0 absolute flex w-full h-[832px]"
        >
          <div className="bg-clouds w-full h-full shrink-0" />
          <div className="bg-clouds w-full h-full shrink-0" />
        </motion.div>

        <div className="bottom-0 z-10 absolute bg-foreground w-full h-full" />

        {/* Banner Text */}
        <div className="z-20 flex flex-col justify-center items-center w-full">
          <h1 className="hidden">Hello, I'm Allan</h1>
          <PageHeading
            text="Hello, I'm Allan"
            cssStyles="drop-shadow-md mt-[-30px] sm:mt-[-100px] text-5xl text-center text-white md:text-7xl happy-monkey-regular"
          />
          <BlurIn cssStyles="sm:mt-[-25px] text-2xl text-center text-white sm:text-4xl dark:text-gray-200 leading-normal happy-monkey-regular">
            Senior Frontend Engineer & UX/UI Enthusiast!
          </BlurIn>
        </div>

        {/* Fireflies */}
        {fireflies}
      </motion.section>
    </div>
  );
};

export default AppBanner;
