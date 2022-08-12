import { FC } from "react";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = () => {
  return (
    <div className="w-full h-[3px] bg-secondary m-auto mt-4  hidden sm:hidden md:hidden lg:flex flex-row-reverse">
      <div className="h-full w-[230px] bg-primary"></div>
    </div>
  );
};

export default ProgressBar;
