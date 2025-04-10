"use client";

// Next.js / core framework
import Image from "next/image";

// Context
import { useAboutMe } from "@/context/AboutMeContext";

// Config
import { cdnBaseUrl } from "@/config";

// Components
import { TextFade } from "@/components/atoms/TextAnimation";

const profileImage = `${cdnBaseUrl}/ar-profile.webp`;

const AboutMeBio = () => {
  const { aboutMe } = useAboutMe();

  return (
    <div id="about" className="bg-[#1B1212] w-full">
      <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-20 mx-auto py-16 container">
        <TextFade direction="up">
          <div className="mx-auto mt-5 border-8 border-white rounded-full w-40 h-40 overflow-hidden">
            <Image
              src={profileImage}
              className="w-full h-full object-cover"
              alt="Allan's profile picture"
              width={160}
              height={160}
            />
          </div>
        </TextFade>

        <div className="w-full sm:w-3/4 font-general-regular text-[#EDEADE] text-center sm:text-left leading-normal">
          <TextFade direction="up">
            <h2 className="mb-5 font-semibold text-[24px] happy-monkey-regular">
              About Me
            </h2>
            {aboutMe.map((bio) => (
              <p className="mb-4 text-[#EDEADE]" key={bio.id}>
                {bio.bio}
              </p>
            ))}
          </TextFade>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBio;
