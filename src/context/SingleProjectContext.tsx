import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { projectsData as projectsDataJson } from "../data/projectsData";
import { ProjectFullDetails } from "../types/types";

interface SingleProjectContextType {
  singleProjectData: ProjectFullDetails;
  setSingleProjectData: Dispatch<SetStateAction<ProjectFullDetails>>;
}

interface SingleProjectProviderProps {
  children: ReactNode;
}

const SingleProjectContext = createContext<SingleProjectContextType | null>(
  null
);

export const SingleProjectProvider = ({
  children,
}: SingleProjectProviderProps) => {
  const [singleProjectData, setSingleProjectData] =
    useState<ProjectFullDetails>(projectsDataJson);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export const useSingleProject = (): SingleProjectContextType => {
  const context = useContext(SingleProjectContext);
  if (!context) {
    throw new Error(
      "useSingleProject must be used within a SingleProjectProvider"
    );
  }
  return context;
};

export default SingleProjectContext;
