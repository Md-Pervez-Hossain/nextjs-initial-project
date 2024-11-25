import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div
      className={twMerge("lg:w-10/12 w-full px-2 lg:px-0 mx-auto", className)}
    >
      {children}
    </div>
  );
};
export default Container;
