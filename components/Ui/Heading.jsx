import React from "react";
import { twMerge } from "tailwind-merge";
const Heading = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "text-base lg:text-[20px]  lg:my-2 my-1 font-poppins font-[600] text-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Heading;
