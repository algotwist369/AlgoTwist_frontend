import { useState } from "react";
import { MdOutlineCelebration } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const MilestoneBanner = () => {
  const [closed, setClosed] = useState(false);

  const handleClick = () => {
    setClosed(true);
  };
  return (
    <div
      className={`${
        closed ? "hidden" : "block"
      } bg-yellow-500 text-black p-1 flex items-center justify-between gap-4 px-4`}
    >
      <div></div>
      <div className="flex items-center gap-2">
        <MdOutlineCelebration className="text-2xl text-highlightText animate-bounce" />
        <h1 className="font-semibold">
          We’ve just crossed 75+ Projects Delivered!
        </h1>
      </div>
      <button onClick={handleClick}>
        <RxCrossCircled className="text-2xl" />
      </button>
    </div>
  );
};

export default MilestoneBanner;
