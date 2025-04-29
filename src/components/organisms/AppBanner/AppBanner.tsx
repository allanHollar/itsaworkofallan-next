"use client";

import { useMemo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Stars from "@/components/particles/Stars";
import { PageHeading, BlurIn } from "@/components/atoms/TextAnimation";
import "./fireflies.sass";

const AppBanner = () => {
  const controls = useAnimation();

  const fireflies = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => (
        <span key={i} className="z-10 firefly" />
      )),
    []
  );

  useEffect(() => {
    let isActive = true;

    const run = async () => {
      // Wait 2 frames for safe DOM mount
      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      );

      while (isActive) {
        try {
          await controls.start({
            x: "0%",
            transition: { duration: 60, ease: "linear" },
          });

          if (!isActive) break;

          await controls.start({
            x: "-100%",
            transition: { duration: 0 },
          });
        } catch (error) {
          // Animation was interrupted (like navigation), that's ok.
          break;
        }
      }
    };

    run();

    return () => {
      isActive = false;
      controls.stop(); // ✅ stop any pending animations cleanly
    };
  }, [controls]);

  return (
    <div className="bg-[#f5e8d7] w-full h-[550px] sm:!h-[800px]">
      <motion.section
        id="hero-banner"
        transition={{ ease: "easeInOut" }}
        className="relative flex sm:flex-row flex-col justify-center sm:justify-between items-center bg-sky mx-auto max-w-[1600px] h-[550px] sm:!h-[800px] overflow-hidden"
      >
        <Stars />
        <motion.div
          className="top-0 left-[54%] absolute bg-moon w-[160px] sm:w-[320px] h-[160px] sm:h-[320px]"
          initial={{ x: -300, y: "55%" }} // Start bottom-left of the anchor
          animate={{ x: 0, y: 0 }} // Rise diagonally into position
          transition={{
            duration: 10,
          }}
        />

        <motion.div
          initial={{ x: "-100%" }}
          animate={controls}
          className="top-0 sm:top-0 left-0 z-0 absolute flex w-full h-[550px]"
        >
          <div className="bg-clouds-mobile bg-size-[100%] sm:!bg-clouds bg-no-repeat bg-top w-full h-[550px] shrink-0" />
          <div className="bg-clouds-mobile bg-size-[100%] sm:!bg-clouds bg-no-repeat bg-top w-full h-[550px] shrink-0" />
        </motion.div>

        <div className="bottom-0 z-10 absolute bg-foreground-mobile bg-size-[100%] sm:!bg-[position:center_150px] sm:!bg-foreground sm:bg-cover bg-no-repeat bg-bottom w-full h-[832px]" />

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
