import { JSX } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { TextFade } from "@/components/atoms/TextAnimation";
import { cdnBaseUrl } from "@/config";
import AppFooterCopyright from "../AppFooterCopyright";
import Sakura from "@/components/particles/Sakura/Sakura";
import styles from "./social.module.css";

interface SocialLink {
  id: number;
  icon: JSX.Element;
  url: string;
}

const ProfileImage = `${cdnBaseUrl}/ar-anime-profile.webp`;

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        className={`text-blue-500 ${styles.ikon} size-10`}
      />
    ),
    url: "https://www.linkedin.com/in/allanritumban/",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        className={`text-[#6e5494] ${styles.ikon} size-10`}
      />
    ),
    url: "https://github.com/allanHollar",
  },
];

const AppFooter = () => {
  return (
    <div
      id="connect"
      className="relative flex flex-col justify-end bg-footer-image bg-cover bg-no-repeat mt-0 pt-5 h-[700px]"
    >
      <TextFade direction="up">
        <p
          className="font-semibold text-2xl text-center text-white sm:text-3xl leading-tight happy-monkey-regular [font-size-adjust:0.46]"
          style={{
            textShadow: "rgba(0, 0, 0, 0.75) .05em .05em 3px",
            fontSizeAdjust: 0.5,
          }}
        >
          Thanks for dropping by! Let’s connect and make <br />
          something awesome happen!
        </p>
      </TextFade>

      <div className="z-10 items-end mx-auto container">
        <div className="opacity-95 mx-auto mt-5 border-8 border-white rounded-full w-40 h-40 overflow-hidden">
          <Image
            src={ProfileImage}
            alt="Allan's cartoon profile picture"
            width={144}
            height={144}
          />
        </div>

        <div
          className={`${styles["social-overlap"]} ${styles["process-section"]} mt100`}
        >
          <div>
            <div className="justify-content-center row">
              <div className={styles["social-bar"]}>
                <div className={`mb-3 text-center ${styles["social-icons"]}`}>
                  <ul className="inline-block m-auto mt-5 border-white border-t-[3px] w-3/4 sm:w-1/3 text-center">
                    {socialLinks.map((link, index) => (
                      <li className="inline" key={index}>
                        <a
                          href={link.url}
                          className={styles["slider-nav-item"]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-20 sm:pt-30 pb-8">
          <AppFooterCopyright />
        </div>
      </div>
      <Sakura />
    </div>
  );
};

export default AppFooter;
