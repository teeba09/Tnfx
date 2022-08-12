import "./App.css";
import "./index.css";
import {
  FaFacebook,
  FaHamburger,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./components/NavBar";
import SideBar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import { useMenu } from "./hooks/useMenu";
import Content from "./components/Content";

function App(): JSX.Element {
  return (
    <div className="flex items-center relative min-h-screen w-screen">
      {/* background image */}
      <img
        src="./bg.png"
        alt="background image"
        className="absolute -z-20 w-full h-full bg-dark-2 object-cover"
      />
      <img
        src="./Asset.png"
        alt=""
        className=" absolute -z-10 bg-dark-2 w-full h-full inline sm:inline md:inline lg:hidden object-cover"
      />
      {/* sidebar */}
      <SideBar />
      {/* other content */}
      <main className="w-full h-full md:container lg:container sm:container m-auto md:p-0 lg:p-8 sm:p-8 ">
        <NavBar />
        <ProgressBar />
        <Content />
      </main>
    </div>
  );
}
export default App;
