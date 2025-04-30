"use client";

import { useMemo, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Stars from "@/components/particles/Stars";
import { PageHeading, BlurIn } from "@/components/atoms/TextAnimation";
import "./fireflies.sass";

type LightColor = "yellow" | "red" | "white";

interface CityLight {
  bottom: number;
  left: number;
  delay: number;
  color: LightColor;
}

const AppBanner = () => {
  const [cityLights, setCityLights] = useState<CityLight[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const colors: LightColor[] = ["yellow", "red", "white"];

    const lights = Array.from({ length: 75 }).map(() => ({
      bottom: Math.random() * 120,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setCityLights(lights);
  }, []);

  const fireflies = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => (
        <span key={i} className="z-10 firefly" />
      )),
    []
  );

  useEffect(() => {
    let isActive = true;

    const run = async () => {
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
          console.error(error);
          break;
        }
      }
    };

    run();

    return () => {
      isActive = false;
      controls.stop();
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
          initial={{ x: -300, y: "55%" }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 10 }}
        />

        <motion.div
          initial={{ x: "-100%" }}
          animate={controls}
          className="top-0 sm:top-0 left-0 z-0 absolute flex w-full h-[550px]"
        >
          <div className="bg-clouds-mobile bg-size-[100%] sm:!bg-clouds bg-no-repeat bg-top w-full h-[550px] shrink-0" />
          <div className="bg-clouds-mobile bg-size-[100%] sm:!bg-clouds bg-no-repeat bg-top w-full h-[550px] shrink-0" />
        </motion.div>

        {/* Main Foreground */}
        <div className="bottom-0 z-10 absolute bg-foreground-mobile bg-size-[100%] sm:!bg-[position:center_150px] sm:!bg-foreground sm:bg-cover bg-no-repeat bg-bottom w-full h-[832px]" />

        {/* Animated Lights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bottom-20 sm:bottom-40 left-0 z-12 absolute w-full h-[500px] pointer-events-none"
        >
          {cityLights.map((light, i) => (
            <div
              key={`light-${i}`}
              className={`city-light city-light-${light.color}`}
              style={{
                bottom: `${light.bottom}px`,
                left: `${light.left}%`,
                animationDelay: `${light.delay}s`,
              }}
            />
          ))}
        </motion.div>

        {/* Gate Foreground */}
        <div className="bottom-0 z-12 absolute bg-foreground-me-gate-mobile bg-size-[100%] sm:!bg-[position:center_150px] sm:!bg-foreground-me-gate sm:bg-cover bg-no-repeat bg-bottom w-full h-[832px]" />

        {/* Text Content */}
        <div className="z-20 flex flex-col justify-center items-center w-full">
          <h1 className="hidden">Hello, I'm Allan</h1>
          <PageHeading
            text="Hello, I'm Allan"
            cssStyles="drop-shadow-md mt-[-50px] sm:mt-[-100px] text-5xl text-center text-white md:text-7xl happy-monkey-regular"
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
