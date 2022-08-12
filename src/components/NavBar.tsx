import { useMenu } from "../hooks/useMenu";
import BurgerButton from "./BurgerButton";
import MenuList from "./MenuList";

const NavBar = () => {
  const { menuOpen, setMenuOpen, toggle } = useMenu();
  return (
    <>
      <nav className="flex items-center w-full justify-between  bg-dark-2 sm:bg-transparent lg:bg-transparent md:bg-transparent font-ged">
        <BurgerButton open={menuOpen} setOpen={setMenuOpen} toggle={toggle} />
        <div className="justify-between gap-2 text-2xl hidden sm:hidden md:felx lg:flex text-white">
          <h1>الصفحه الرئيسية </h1>
          <h1 className="h-[25px] w-[3px] bg-primary mx-4"></h1>
          <h1>عن الشركة</h1>
        </div>
        <img src="./tnfx.png" alt="" className=" w-[230px] h-[49px]" />
      </nav>
      <MenuList open={menuOpen} />
    </>
  );
};

export default NavBar;
