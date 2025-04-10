import { ProjectData } from "../types/types";
import { cdnBaseUrl } from "../config";

const PorjectClentWork = `${cdnBaseUrl}/project-clients-1.webp`;
const ProjectFiveBelow = `${cdnBaseUrl}/project-fivebelow-1.webp`;
const ProjectHollar = `${cdnBaseUrl}/project-hollar-1.webp`;
const ProjectMasterClass = `${cdnBaseUrl}/project-masterclass-1.webp`;
const ProjectMogreet = `${cdnBaseUrl}/project-mogreet-1.webp`;
const ProjectPledgeling = `${cdnBaseUrl}/project-pledgeling-1.webp`;

export const projectsData: ProjectData = {
  "project-one": {
    id: 1,
    title: "Five Below (e-commerce)",
    category: "Web Dev",
    img: ProjectFiveBelow,
    projectHeader: {
      title: "Five Below (e-commerce)",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
  },
  "project-two": {
    id: 2,
    title: "Hollar (e-commerce)",
    category: "Web Dev",
    img: ProjectHollar,
  },
  "project-three": {
    id: 3,
    title: "MasterClass (SaaS Learning Platform)",
    category: "Web · Dev UI/UX Design",
    img: ProjectMasterClass,
  },
  "project-four": {
    id: 4,
    title: "Pledgeling (SaaS Philanthropy)",
    category: "Web · Dev UI/UX Design",
    img: ProjectPledgeling,
  },
  "project-five": {
    id: 5,
    title: "Mogreet (SaaS - Mobile Marketing)",
    category: "Web · Dev UI/UX Design",
    img: ProjectMogreet,
  },
  "project-six": {
    id: 6,
    title: "Various Client Work",
    category: "Web · Dev UI/UX Design",
    img: PorjectClentWork,
  },
};
