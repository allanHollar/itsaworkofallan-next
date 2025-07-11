// Core Libraries
import { JSX } from "react";
import Image from "next/image";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// UI Components
import { TextFade } from "@/components/atoms/TextAnimation";
import AppFooterCopyright from "../AppFooterCopyright";
import Sakura from "@/components/particles/Sakura/Sakura";

// Config & Styles
import { cdnBaseUrl } from "@/config";
import { useOutboundClick } from "@/hooks/useOutboundClick";

interface SocialLink {
  id: number;
  icon: JSX.Element;
  url: string;
  linkName: string;
}

const ProfileImage = `${cdnBaseUrl}/ar-anime-profile.webp`;

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        className={`text-blue-500 fa-3x ikon`}
      />
    ),
    url: "https://www.linkedin.com/in/allanritumban/",
    linkName: "LinkedIn",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        className={`text-[#6e5494] fa-3x ikon`}
      />
    ),
    url: "https://github.com/allanHollar",
    linkName: "GitHub Profile",
  },
];

const AppFooter = () => {
  const outBoundClick = useOutboundClick();

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

        <div className="social-overlap process-section mt100">
          <div>
            <div className="justify-content-center row">
              <div className="social-bar">
                <div className="mb-3 text-center social-icons">
                  <ul className="inline-block m-auto mt-5 border-white border-t-[3px] w-3/4 sm:w-1/3 text-center">
                    {socialLinks.map((link, index) => (
                      <li className="inline" key={index}>
                        <a
                          href={link.url}
                          className="slider-nav-item"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => outBoundClick(link.url, link.linkName)}
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
