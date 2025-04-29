"use client";

import { useEffect, useRef } from "react";

const NIGHT_SKY_COLORS = [
  "#FFFFFF",
  "#FFDAB9",
  "#FFE4B5",
  "#FDFD96",
  "#F0E68C",
  "#FFFAF0",
];
const SMALL_STAR_SIZES = [0.5, 1, 1.5];
const MEDIUM_STAR_SIZES = [2, 2.5, 3];
const LARGE_STAR_SIZES = [3.5, 4, 4.5];

interface StarsProps {
  number?: number;
  mediumNumber?: number;
  largeNumber?: number;
}

export default function Stars({
  number = 150,
  mediumNumber = 60,
  largeNumber = 20,
}: StarsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const layers = [
      {
        sizeArray: SMALL_STAR_SIZES,
        depth: 0.1,
        stars: number,
        className: "background-stars",
      },
      {
        sizeArray: MEDIUM_STAR_SIZES,
        depth: 0.3,
        stars: mediumNumber,
        className: "midground-stars",
      },
      {
        sizeArray: LARGE_STAR_SIZES,
        depth: 0.6,
        stars: largeNumber,
        className: "foreground-stars",
      },
    ];

    const createStar = (
      sizeArray: number[],
      depth: number,
      className: string
    ) => {
      const star = document.createElement("div");
      const size = sizeArray[Math.floor(Math.random() * sizeArray.length)];
      const color =
        NIGHT_SKY_COLORS[Math.floor(Math.random() * NIGHT_SKY_COLORS.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      Object.assign(star.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}vh`,
        left: `${x}vw`,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 ${size * 2}px ${size / 2}px ${color}`,
        "--parallax-depth": depth,
        opacity: "0.8",
        willChange: "transform, opacity",
        animation: `twinkle ${0.8 + Math.random() * 1.2}s infinite ease-in-out`,
      });

      star.classList.add(className);
      container.appendChild(star);
    };

    const createShootingStar = () => {
      const star = document.createElement("div");
      const isLarge = Math.random() > 0.5;
      const startX = Math.random() * 100;
      const startY = Math.random() * 50;

      const size = isLarge ? "4px" : "2px";
      const glow = isLarge
        ? `0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,1)`
        : "";

      Object.assign(star.style, {
        position: "absolute",
        width: size,
        height: size,
        top: `${startY}vh`,
        left: `${startX}vw`,
        backgroundColor: "#FFF",
        borderRadius: "50%",
        boxShadow: glow,
        animation: `shoot 2s linear forwards, fadeInOut 2s`,
        willChange: "transform, opacity",
      });

      container.appendChild(star);
      setTimeout(() => star.remove(), 2000);
    };

    layers.forEach(({ sizeArray, depth, stars, className }) => {
      Array.from({ length: stars }).forEach(() =>
        createStar(sizeArray, depth, className)
      );
    });

    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.6) createShootingStar();
    }, 3000);

    return () => {
      container.innerHTML = "";
      clearInterval(shootingStarInterval);
    };
  }, [number, mediumNumber, largeNumber]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const layers = [
        { className: ".background-stars", depth: 0.1 },
        { className: ".midground-stars", depth: 0.3 },
        { className: ".foreground-stars", depth: 0.6 },
      ];

      layers.forEach(({ className, depth }) => {
        const stars = document.querySelectorAll(className);
        stars.forEach((star) => {
          (star as HTMLElement).style.transform = `translateY(${
            scrollY * depth
          }px)`;
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}
