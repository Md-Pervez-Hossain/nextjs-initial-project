import React from "react";
import { twMerge } from "tailwind-merge";

const FullContainer = ({ children, className }) => {
  return <div className={twMerge("w-full ", className)}>{children}</div>;
};

export default FullContainer;
