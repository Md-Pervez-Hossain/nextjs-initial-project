import React from "react";
import { twMerge } from "tailwind-merge";

const Paragraph = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "lg:text-base text-[14px]  text-gray-700  lg:leading-[28px] leading-[24px] font-poppins ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
