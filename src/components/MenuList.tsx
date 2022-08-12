import { FC } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface MemuListProps {
  open: boolean;
}

const MemuList: FC<MemuListProps> = (props) => {
  return props.open ? (
    <div className="flex items-end flex-col gap-4 bg-dark-2">
      <div className="flex gap-2 text-white cursor-pointer border-b-2 border-dark pb-4 w-full p-2">
        <AiFillHome className="text-primary h-5 w-5" />
        <p>الصفحة الرئسية</p>
      </div>
      <div className="flex gap-2 text-white cursor-pointer w-full p-2">
        <BsFillInfoCircleFill className="text-primary h-5 w-5" />
        <p>عن الشركة</p>
      </div>
    </div>
  ) : null;
};

export default MemuList;
