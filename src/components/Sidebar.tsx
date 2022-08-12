import { FC } from "react";
import {
  FaYoutube,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <ul className="w-[65px] z-20  flex-col items-center justify-center gap-6 bg-dark hidden sm:hidden md:flex lg:flex bg-opacity-50 min-h-screen">
      <li className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition">
        <a
          href="https://youtube.com/c/TNFX_CO"
          target="_blank"
          className="hover:bg-primary"
        >
          {" "}
          <FaYoutube className="h-5 w-5 " />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/TNFXtrading"
          target="_blank"
          className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition"
        >
          {" "}
          <FaTelegram className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/tnfx.co/?ti=as"
          className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition"
          target="_blank"
        >
          {" "}
          <FaFacebook className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/tnfx.co?igshid=1kr9zqp68pgvt"
          className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition"
          target="_blank"
        >
          {" "}
          <FaInstagram className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/TNFXofficial"
          className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition"
          target="_blank"
        >
          {" "}
          <FaTwitter className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/tnfx"
          target="_blank"
          className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition"
        >
          {" "}
          <FaLinkedinIn className="h-5 w-5" />{" "}
        </a>
      </li>
      <li>
        <a
          href="https://vt.tiktok.com/ZSdQBovWa/"
          target="_blank"
          className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary transition"
        >
          <FaTiktok className="h-5 w-5" />
        </a>
      </li>
    </ul>
  );
};

export default SideBar;
