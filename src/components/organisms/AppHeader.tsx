// Core & Framework
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TextFade } from "@/components/atoms/TextAnimation";

// Third-party Libraries
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// App Config
import { cdnBaseUrl } from "@/config";

interface Link {
  id: number;
  title: string;
  url: string;
}

const links: Link[] = [
  {
    id: 1,
    title: "About Me",
    url: "about",
  },
  {
    id: 2,
    title: "Core Skills",
    url: "core-skills",
  },
  {
    id: 3,
    title: "Work History",
    url: "work-history",
  },
  {
    id: 4,
    title: "Projects",
    url: "projects",
  },
  {
    id: 5,
    title: "Let's Connect!",
    url: "connect",
  },
];

const AppHeader: React.FC = () => {
  const pathname = usePathname();
  const isProjectRoute = pathname.includes("projects");

  const shouldShowNavLinks = isProjectRoute ? "hidden" : "hidden sm:flex";
  const logoAlignment = isProjectRoute
    ? "justify-center w-full"
    : "justify-center sm:justify-between w-full sm:w-auto";

  return (
    <div className="top-0 z-50 fixed bg-[#f5e8d7] shadow-md border-t-[5px] border-black border-solid w-full h-[74px]">
      <div className="mx-auto container">
        <div className={`${logoAlignment} z-10 flex items-center py-4`}>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <motion.div
                layout
                initial={{ rotateY: 0, opacity: 0 }}
                whileInView={{ rotateY: 720, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.5 }}
                style={{ perspective: 1000 }}
              >
                <Image
                  src={`${cdnBaseUrl}/ar-brand.svg`}
                  alt="Logo"
                  width={50}
                  height={42}
                  priority
                />
              </motion.div>
            </Link>
          </div>

          <TextFade direction="up">
            <div
              className={`${shouldShowNavLinks} flex gap-6 items-center font-semibold text-l`}
            >
              {links.map((link) => (
                <ScrollLink
                  to={link.url}
                  smooth={true}
                  duration={500}
                  offset={-74}
                  className="group cursor-pointer"
                  key={link.id}
                >
                  <span className="border-[#F0BB78] group-hover:border-[#efd5b4] border-b-2 font-semibold text-[#5a5a5a] text-lg group-hover:text-[#c76c3f] transition-all">
                    {link.title}
                  </span>
                </ScrollLink>
              ))}
            </div>
          </TextFade>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
