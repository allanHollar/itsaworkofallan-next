import { useEffect, useState } from "react";
import "./catRunning.scss";

const CatRunning = () => {
  const [showCat, setShowCat] = useState(true); // show on load

  useEffect(() => {
    if (!showCat) {
      const timer = setTimeout(() => {
        setShowCat(true);
      }, 10000); // wait 5s before showing again

      return () => clearTimeout(timer);
    } else {
      const duration = window.innerWidth < 667 ? 3000 : 6000;
      const timer = setTimeout(() => {
        setShowCat(false); // hide after animation ends
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [showCat]);

  return showCat ? (
    <div id="cat-animation" className="sm:top-[458px] absolute cat-wrapper">
      <div className="bg-[length:1213px_94px] bg-cat-running-mobile sm:bg-[length:2048px_158px] sm:bg-cat-running bg-no-repeat w-[100px] sm:w-[171px] h-[94px] sm:h-[158px] overflow-hidden cat" />
    </div>
  ) : null;
};

export default CatRunning;
