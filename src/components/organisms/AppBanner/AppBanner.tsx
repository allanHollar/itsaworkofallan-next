"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "@/components/particles/Loading/Loading";
import Stars from "@/components/particles/Stars";
import { PageHeading, BlurIn } from "@/components/atoms/TextAnimation";
import Image from "next/image";
import { cdnBaseUrl } from "@/config";
import "./fireflies.sass";
import "./hero.sass";

type LightColor = "yellow" | "red" | "white";

interface CityLight {
  bottom: number;
  left: number;
  delay: number;
  color: LightColor;
}

const imageUrls = [
  `${cdnBaseUrl}/stars-bg.webp`,
  `${cdnBaseUrl}/clouds.webp`,
  `${cdnBaseUrl}/mid-clouds.webp`,
  `${cdnBaseUrl}/moon.webp`,
  `${cdnBaseUrl}/foreground.webp`,
  `${cdnBaseUrl}/foreground-me-gate.webp`,
  `${cdnBaseUrl}/bush_sway.svg`,
];

const AppBanner = () => {
  const [cityLights, setCityLights] = useState<CityLight[]>([]);
  const [imagesLoaded, setImageLoaded] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = img.onerror = () => {
          loadedCount++;
          resolve();
        };
      });

    Promise.all(imageUrls.map(loadImage)).then(() => {
      if (isMounted) {
        setImageLoaded(loadedCount);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

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

  return (
    <div className="relative bg-[#f5e8d7] w-full h-[550px] sm:!h-[780px]">
      {imagesLoaded >= imageUrls.length ? (
        <motion.section
          id="hero-banner"
          transition={{ ease: "easeInOut" }}
          className="relative flex sm:flex-row flex-col justify-center sm:justify-between items-center bg-sky mx-auto max-w-[1600px] h-[550px] sm:!h-[780px] overflow-hidden"
        >
          <Stars />

          <motion.div
            className="top-0 left-[54%] absolute bg-moon w-[160px] sm:w-[320px] h-[160px] sm:h-[320px]"
            initial={{ x: -300, y: "55%" }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 10 }}
          />

          {/* Background Clouds */}
          <div className="top-[15px] sm:top-0 left-0 z-0 absolute flex w-full h-[550px] overflow-hidden">
            <div className="bg-clouds-mobile bg-size-[100%] sm:bg-clouds bg-no-repeat bg-top opacity-95 w-full h-[550px] shrink-0 cloud-scroll-back" />
            <div className="bg-clouds-mobile bg-size-[100%] sm:bg-clouds bg-no-repeat bg-top opacity-95 w-full h-[550px] shrink-0 cloud-scroll-back" />
          </div>

          {/* Main Foreground */}
          <div className="bottom-0 z-10 absolute bg-foreground-mobile bg-size-[100%] sm:!bg-[position:center_150px] sm:!bg-foreground sm:bg-cover bg-no-repeat bg-bottom w-full h-[832px]" />

          {/* Mid Clouds */}
          <div className="bottom-[-95px] sm:bottom-[10px] left-0 z-12 absolute flex w-full h-[350px] overflow-hidden">
            <div className="bg-clouds-mid-mobile bg-size-[100%] sm:bg-clouds-mid bg-repeat-x w-full h-full shrink-0 cloud-scroll" />
            <div className="bg-clouds-mid-mobile bg-size-[100%] sm:bg-clouds-mid bg-repeat-x w-full h-full shrink-0 cloud-scroll" />
          </div>

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
          <div className="z-20 flex flex-col justify-center items-center mt-[-100px] w-full">
            <h1 className="hidden">Hello, I'm Allan</h1>
            <PageHeading
              text="Hello, I'm Allan"
              cssStyles="drop-shadow-md mt-[-50px] sm:mt-[-100px] text-4xl sm:text-5xl text-center text-white md:text-7xl happy-monkey-regular"
            />
            <BlurIn cssStyles="sm:mt-[-25px] text-xl text-center text-white text-3xl sm:text-4xl dark:text-gray-200 leading-normal happy-monkey-regular">
              Senior Frontend Engineer & UX/UI Enthusiast!
            </BlurIn>
          </div>

          {/* Bushes Swaying Left*/}
          <Image
            src={`${cdnBaseUrl}/bush_sway.svg`}
            width={1000}
            height={600}
            alt="bush swaying"
            className="bottom-[-65px] sm:bottom-[-100px] left-[-55%] sm:left-[-50%] z-12 absolute"
          />

          {/* Bushes Swaying Right*/}
          <Image
            src={`${cdnBaseUrl}/bush_sway.svg`}
            width={1000}
            height={600}
            alt="bush swaying"
            className="right-[-55%] sm:right-[-50%] bottom-[-65px] sm:bottom-[-100px] z-12 absolute opacity-95"
          />
          {fireflies}
        </motion.section>
      ) : (
        <div
          id="loading"
          className="relative flex justify-center items-center bg-[#1B1212] h-[550px] sm:!h-[800px] text-2xl text-white"
        >
          <Loading />
        </div>
      )}
    </div>
  );
};

export default AppBanner;
