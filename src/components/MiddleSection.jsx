import React, { useEffect, useRef } from "react";
import { useAppContext } from "../contexts/AppContext";

const MiddleSection = () => {
  const { selectedContent } = useAppContext();
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, [selectedContent])

  return (
    <div
      className="flex-1 "
    >
      <div ref={topRef} />
      
   <div className="px-6 sm:px-20 md:px-12 h-[642px] sm:h-screen w-full bg-red-600 overflow-y-scroll overflow-x-hidden custom-scrollbar sm:mb-16 lg:mt-10  lg:mb-[6rem]">
        <p className="text-sm sm:text-base leading-[25px] sm:leading-loose sm:pt-16 lg:pt-0 sm:pb-[120px] lg:pb-[150px]">
          {selectedContent} 
        </p>
     </div>
    </div>
  );
};

export default MiddleSection;
