import { ProjectFullDetails } from "../types/types";
import { cdnBaseUrl } from "../config";

const fiveBelowOne = `${cdnBaseUrl}/project-fivebelow-1.webp`;
const fiveBelowTwo = `${cdnBaseUrl}/project-fivebelow-2.webp`;
const fiveBelowThree = `${cdnBaseUrl}/project-fivebelow-3.webp`;

const hollarOne = `${cdnBaseUrl}/project-hollar-1.webp`;
const hollarTwo = `${cdnBaseUrl}/project-hollar-2.webp`;
const hollarThree = `${cdnBaseUrl}/project-hollar-3.webp`;

const masterClassOne = `${cdnBaseUrl}/project-masterclass-1.webp`;
const masterClassTwo = `${cdnBaseUrl}/project-masterclass-2.webp`;
const masterClassThree = `${cdnBaseUrl}/project-masterclass-3.webp`;

const pledgelingOne = `${cdnBaseUrl}/project-pledgeling-1.webp`;
const pledgelingTwo = `${cdnBaseUrl}/project-pledgeling-2.webp`;
const pledgelingThree = `${cdnBaseUrl}/project-pledgeling-3.webp`;

const mogreetOne = `${cdnBaseUrl}/project-mogreet-1.webp`;
const mogreetThree = `${cdnBaseUrl}/project-mogreet-2.webp`;
const mogreetTwo = `${cdnBaseUrl}/project-mogreet-3.webp`;

const clientWorkOne = `${cdnBaseUrl}/project-clients-1.webp`;
const clientWorkTwo = `${cdnBaseUrl}/project-clients-2.webp`;
const clientWorkThree = `${cdnBaseUrl}/project-clients-3.webp`;

export const projectsData: ProjectFullDetails = {
  "project-one": {
    projectHeader: {
      title: "Five Below",
      tenure: "Jan 2020 - Oct 2024",
      jobTitle: "Lead Senior Front-End Engineer",
    },
    projectImages: [
      {
        id: 1,
        title: "Five Below desktop and mobile web e-commerce store",
        img: fiveBelowOne,
      },
      {
        id: 2,
        title: "Five Below product page",
        img: fiveBelowTwo,
      },
      {
        id: 3,
        title: "Five Below desktop store locator",
        img: fiveBelowThree,
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfo: [
        {
          id: 1,
          emoji: "💼",
          details: "Five Below",
        },
        {
          id: 2,
          emoji: "🤗",
          details:
            "Discount retailer store that sells products that cost up to $5.",
        },
        {
          id: 3,
          title: "Website",
          emoji: "🔗",
          details: "https://www.fivebelow.com/",
        },
      ],
      technologies: [
        {
          emoji: "🛠️",
          techs: [
            "React",
            "TypeScript",
            "GraphQL",
            "Tailwind CSS",
            "Node.js",
            "CommerceTools CMS",
          ],
        },
      ],
      projectDetailsHeader: "The Journey",
      projectDetails: [
        {
          id: 1,
          details:
            "At Five Below, I played a pivotal role as a Lead Senior Frontend Engineer, where I was responsible for designing and optimizing the front-end experience for a large-scale e-commerce platform. The team and I tackled the challenge of creating a seamless, responsive, and scalable UI while integrating modern frameworks like React to enhance performance and usability. We aimed to deliver a consistent, fast, and intuitive user experience across both desktop and mobile platforms. One of the most rewarding aspects of the role was collaborating with cross-functional teams—including designers, product managers, and backend engineers—to ensure that our solutions aligned with business goals while meeting customer expectations. Additionally, we adopted Agile and Scrum methodologies to break down complex tasks, allowing us to iterate rapidly while maintaining code quality and performance standards.",
        },
        {
          id: 2,
          details:
            "One of our biggest challenges at Five Below was ensuring performance and stability during high-traffic events, like seasonal sales and product launches. To address this, we prioritized performance optimization and load testing, identifying and resolving bottlenecks to improve page load times and responsiveness. Implementing dynamic UI components and conducting thorough code reviews helped maintain a robust and scalable architecture. We also focused on enhancing accessibility and cross-browser compatibility, ensuring that users diverse environments could easily navigate the site. The successful re-platforming effort not only improved the website's performance and scalability but also boosted customer satisfaction and engagement. This experience honed my ability to collaborate effectively, solve technical challenges, and deliver impactful solutions in a fast-paced, dynamic environment.",
        },
      ],
    },
  },
  "project-two": {
    projectHeader: {
      title: "Hollar",
      tenure: "Dec 2015 - Jan 2020",
      jobTitle: "Senior Frontend Engineer",
    },
    projectImages: [
      {
        id: 1,
        title: "Hollar desktop and mobile web e-commerce store",
        img: hollarOne,
      },
      {
        id: 2,
        title: "Hollar product listing page",
        img: hollarTwo,
      },
      {
        id: 3,
        title: "Hollar promo web graphic",
        img: hollarThree,
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfo: [
        {
          id: 1,
          emoji: "💼",
          details: "Five Below",
        },
        {
          id: 2,
          emoji: "🤗",
          details:
            "Hollar is the ultimate destination for cool products at incredible deals starting at $2.",
        },
        {
          title: "Website",
          id: 3,
          emoji: "🔗",
          details: "https://www.linkedin.com/company/hollar/about/",
        },
      ],
      technologies: [
        {
          emoji: "🛠️",
          techs: [
            "React",
            "Node.js",
            "Ruby on Rails",
            "GraphQL",
            "MySQL",
            "MobX",
            "Solidus CMS",
          ],
        },
      ],
      projectDetailsHeader: "The Journey",
      projectDetails: [
        {
          id: 1,
          details:
            "At Hollar, I was one of the first engineers to join a small startup team of around 15 people, which eventually grew to 45 members. Hollar was an online dollar store dedicated to providing great products at affordable prices, attracting a large and diverse customer base. As part of a tight-knit tech team of about 10 people, I played a crucial role in building and scaling the platform the ground up. My primary focus was developing responsive and scalable UI components using React, JavaScript, HTML, and CSS, while also working closely with designers, product managers, and backend engineers to create seamless user experiences.",
        },
        {
          id: 2,
          details:
            "One of the biggest challenges we faced was maintaining performance during peak traffic periods, especially as the platform grew rapidly. To address this, we conducted extensive performance testing and implemented client-side optimizations to reduce load times and ensure cross-browser compatibility. Additionally, I led efforts to streamline the checkout process, making it faster and more intuitive, which significantly increased conversion rates. Being part of a small, agile team taught me to adapt quickly, take on full ownership of projects, and develop solutions that balanced scalability and performance. This experience honed my ability to collaborate effectively in a startup environment while maintaining a high standard of code quality.",
        },
      ],
    },
  },
  "project-three": {
    projectHeader: {
      title: "MasterClass",
      tenure: "Apr 2015 - Jun 2015",
      jobTitle: "Frontend Engineer",
    },
    projectImages: [
      {
        id: 1,
        title: "MasterClass web course page",
        img: masterClassOne,
      },
      {
        id: 2,
        title: "MasterClass mobile web experience",
        img: masterClassTwo,
      },
      {
        id: 3,
        title: "MasterClass checkout page",
        img: masterClassThree,
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfo: [
        {
          id: 1,
          emoji: "💼",
          details: "MasterClass",
        },
        {
          id: 2,
          emoji: "🤗",
          details: "E-Learning Course Provider ",
        },
        {
          title: "Website",
          id: 3,
          emoji: "🔗",
          details: "https://www.masterclass.com/",
        },
      ],
      technologies: [
        {
          emoji: "🛠️",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Ruby on Rails",
            "Bootstrap",
            "jQuery",
          ],
        },
      ],
      projectDetailsHeader: "The Journey",
      projectDetails: [
        {
          id: 1,
          details:
            "At MasterClass, I worked as a contract Frontend Engineer on a platform that provides high-quality, on-demand educational content taught by world-renowned instructors. My primary focus was to build and maintain responsive, visually engaging user interfaces that enhanced the learning experience. Collaborating closely with designers, product managers, and backend engineers, I helped implement scalable and intuitive UI components using technologies like React, JavaScript, HTML, and CSS. We focused on delivering a seamless and consistent user experience across both desktop and mobile devices while maintaining high performance and usability standards.",
        },
      ],
    },
  },
  "project-four": {
    projectHeader: {
      title: "Pledgeling",
      tenure: "Jan 2015 - May 2015",
      jobTitle: "Front-End Developer & UX/UI Designer",
    },
    projectImages: [
      {
        id: 1,
        title: "Pledgeling fundraising page and partnering with evite",
        img: pledgelingOne,
      },
      {
        id: 2,
        title: "Pledgeling landing page for fundraisers",
        img: pledgelingTwo,
      },
      {
        id: 3,
        title: "Pledgeling landing page for fundraisers",
        img: pledgelingThree,
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfo: [
        {
          id: 1,
          emoji: "💼",
          details: "Pledgeling",
        },
        {
          id: 2,
          emoji: "🤗",
          details:
            "#1 Free Fundraising and Donation Platform Raise for online donations.",
        },
        {
          title: "Website",
          id: 3,
          emoji: "🔗",
          details: "https://www.pledgelingfoundation.org/",
        },
      ],
      technologies: [
        {
          emoji: "🛠️",
          techs: ["HTML", "CSS", "JavaScript", "Ruby on Rails", "Bootstrap"],
        },
      ],
      projectDetailsHeader: "The Journey",
      projectDetails: [
        {
          id: 1,
          details:
            "At Pledgeling, I worked as a Contract Frontend Engineer and UX/UI Designer, focused on building and maintaining responsive, mission-driven web applications that support nonprofit fundraising and corporate social responsibility initiatives. My role involved designing intuitive, visually appealing user interfaces while collaborating closely with a small, agile team of developers. I utilized React, JavaScript, HTML, and CSS to implement reusable components, improving consistency and maintainability across the platform.",
        },
        {
          id: 2,
          details:
            "One of the key challenges at Pledgeling was ensuring seamless integration between frontend components and backend services, particularly during high-traffic donation events. To address this, I focused on performance optimizations and applied best practices in UI/UX design to deliver engaging, accessible, and user-friendly experiences. Additionally, I participated in code reviews, contributed to UI/UX enhancements, and crafted aesthetic, responsive designs that aligned with the brand’s mission. This experience honed my ability to balance creativity with functionality, ensuring that both visual appeal and performance were consistently met.",
        },
      ],
    },
  },
  "project-five": {
    projectHeader: {
      title: "Mogreet • Outspoken • mGage",
      tenure: "Jun 2011 - Jan 2015",
      jobTitle: "Front-End Developer & UX/UI Designer",
    },
    projectImages: [
      {
        id: 1,
        title: "Mogreet and Outspoken web experiences",
        img: mogreetOne,
      },
      {
        id: 2,
        title: "Mogreet Enterprise and Mogreet Express mobile web experience",
        img: mogreetTwo,
      },
      {
        id: 3,
        title: "Outspoken web experience",
        img: mogreetThree,
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfo: [
        {
          id: 1,
          emoji: "💼",
          details: "Mogreet • Outspoken • mGage",
        },
        {
          id: 2,
          emoji: "🤗",
          details:
            "Mogreet is a text message marketing platform focused on the delivery of fully branded, rich media to mobile devices via MMS.",
        },
      ],
      technologies: [
        {
          emoji: "🛠️",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Ruby on Rails",
            "PHP (WordPress CMS)",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeader: "The Journey",
      projectDetails: [
        {
          id: 1,
          details:
            "At Mogreet, I served as the Frontend Developer and UX/UI Designer, playing a crucial role in building interactive and engaging mobile messaging applications. Mogreet was a pioneering mobile marketing and multimedia messaging (MMS) platform, enabling brands to deliver rich media content via text messages. As part of a small, agile team, I designed and implemented user-friendly interfaces using technologies like JavaScript, jQuery, HTML, CSS, and media queries to ensure responsive and visually appealing layouts.",
        },
        {
          id: 2,
          details:
            "One of the primary challenges at Mogreet was achieving cross-device compatibility given the diversity of mobile devices and carriers at the time. To address this, I utilized adaptive UI components and performed extensive testing across multiple platforms to ensure a consistent user experience. Additionally, I collaborated closely with product managers, and backend engineers to maintain a cohesive brand identity and functionality throughout the messaging experience. Working at Mogreet honed my ability to combine technical expertise with creative design, delivering reliable and intuitive mobile solutions that powered innovative marketing campaigns.",
        },
        {
          id: 3,
          details:
            "During my time at Mogreet, the company was acquired by mGage and later rebranded as Outspoken, marking a significant transformation and growth period. Working at Mogreet honed my ability to combine technical expertise with creative design, delivering reliable and intuitive mobile solutions that powered innovative marketing campaigns.",
        },
      ],
    },
  },
  "project-six": {
    projectHeader: {
      title: "Various Client Work",
      tenure: "2011 - 2015",
      jobTitle: "Front-End Developer & UX/UI Designer",
    },
    projectImages: [
      {
        id: 1,
        title: "Various client work",
        img: clientWorkOne,
      },
      {
        id: 2,
        title: "Kabul project Management UI",
        img: clientWorkTwo,
      },
      {
        id: 3,
        title: "Kabul project Management UI",
        img: clientWorkThree,
      },
    ],
    projectInfo: {
      clientHeading: "About Company",
      companyInfo: [
        {
          id: 1,
          emoji: "💼",
          details: "Client Work",
        },
        {
          id: 2,
          emoji: "🤗",
          details: "Digital Marketing",
        },
      ],
      technologies: [
        {
          emoji: "🛠️",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Ruby on Rails",
            "PHP",
            "Bootstrap",
          ],
        },
      ],
      projectDetailsHeader: "The Journey",
      projectDetails: [
        {
          id: 1,
          details:
            "Throughout my career, I have worked with a variety of high-profile clients, including the NFL, Hot97, Fox, TBS, and Colgate. As a Frontend Developer and UX/UI Designer, I was responsible for designing and developing both mobile and desktop landing pages for their marketing campaigns. My primary focus was to create responsive, visually appealing, and performance-optimized pages that aligned with each brand’s identity while maintaining cross-browser compatibility.",
        },
        {
          id: 2,
          details:
            "I collaborated closely with marketing teams, designers, and project managers to ensure that each landing page delivered an engaging user experience and effectively supported campaign objectives. By leveraging HTML, CSS, JavaScript, and jQuery, I built intuitive interfaces that performed seamlessly across various devices and platforms. These projects honed my ability to rapidly prototype, adapt to client needs, and deliver high-quality, branded solutions under tight deadlines.",
        },
      ],
    },
  },
};
