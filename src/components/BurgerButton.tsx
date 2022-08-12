import { FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

interface BurgerMenuProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  toggle: () => void;
}

const BurgerButton: FC<BurgerMenuProps> = (props) => {
  return (
    <div className="sm:inline md:inline  lg:hidden p-0 flex flex-col items-start">
      <button onClick={props.toggle}>
        {props.open ? (
          <AiOutlineClose className="text-primary  z-20 w-fit h-12  " />
        ) : (
          <GiHamburgerMenu className="text-primary  z-20 w-fit h-12  " />
        )}
      </button>
    </div>
  );
};

export default BurgerButton;
