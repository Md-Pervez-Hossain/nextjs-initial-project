import { twMerge } from "tailwind-merge";

const Title = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "text-[18px] lg:text-[32px] font-[700] lg:mb-5 my-2 font-poppins text-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Title;
