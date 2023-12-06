import React from "react";

export const Label = ({ className }) => {
  return (
    <div className={`relative flex flex-row px-2 py-1 border border-solid border-lavender`}>
      <img
        className="absolute w-[12px] h-[12px] top-[-4px] left-[-4px]"
        alt="Sprise spark"
        src="../static/img/sprise-spark-shear12.svg"
      />
      <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-purple text-[12px] tracking-[0] leading-[normal]">
        ACQUIRED
      </span>
    </div>
  );
};
