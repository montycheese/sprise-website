import React from "react";

export const Label = ({ className }) => {
  return (
    <div
      className={`inline-flex items-start px-[8px] py-[4px] relative border border-solid border-lavender ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-medium text-purple text-[12px] tracking-[0] leading-[normal]">
        ACQUIRED
      </div>
      <img
        className="absolute w-[12px] h-[12px] top-[-2px] left-[-2px]"
        alt="Sprise spark"
        src="../static/img/sprise-spark-shear12.svg"
      />
    </div>
  );
};
