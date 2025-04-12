import { FC } from "react";
import FunnyCat from "@/components/particles/FunnyCat/FunnyCat";

const AppPreFooter: FC = () => {
  return (
    <div className="relative flex flex-col justify-end h-[200px]">
      <FunnyCat />
    </div>
  );
};

export default AppPreFooter;
