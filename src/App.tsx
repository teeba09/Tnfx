import { useState } from "react";
import reactLogo from "./assets/react.svg";
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
import { Menu, Transition } from "@headlessui/react";

function App(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const toggle = () => setMenuOpen((e) => !e);
  return (
    <div className="flex">
      <div className=" min-h-screen w-full 	">
        <img
          src="./bg.png"
          alt=""
          className=" absolute -z-40 bg-dark-2 w-full h-full hidden sm:hidden md:inline lg:inline "
        />
        <img
          src="./Asset.png"
          alt=""
          className="object-cover -z-10 bg-dark-2 w-full h-full inline sm:inline md:inline lg:hidden "
        />
        <div className="">
          <div className="px-[3rem] py-10 bg-dark sm:bg-dark md:bg-dark  lg:bg-transparent ">
            <div className=" flex justify-between text-light ">
              <img src="./tnfx.png" alt="" className=" w-[230px] h-[42px]" />
              <div className=" justify-between gap-2 text-2xl hidden sm:hidden md:felx lg:flex">
                <h1>عن الشركة</h1>
                <h1 className="h-[25px] w-[3px] bg-primary mx-4"></h1>
                <h1>الصفحه الرئيسية </h1>
              </div>

              <div className="sm:inline md:inline  lg:hidden p-0 flex flex-col items-start">
                <button onClick={toggle}>
                  {menuOpen ? (
                    <AiOutlineClose className="text-primary  z-20 w-fit h-12  " />
                  ) : (
                    <GiHamburgerMenu className="text-primary  z-20 w-fit h-12  " />
                  )}
                </button>
              </div>
            </div>

            {/* line */}
            <div className=" w-full h-[3px] bg-secondary m-auto mt-4 hidden sm:hidden md:hidden lg:block ">
              <div className="h-full w-[230px] bg-primary"></div>
            </div>
            {menuOpen && (
              <div className="flex items-end flex-col gap-4 mt-5">
                <div className="flex gap-2 text-white cursor-pointer border-b-2 border-dark w-full justify-end pb-4">
                  <p>الصفحة الرئسية</p>
                  <AiFillHome className="text-primary h-5 w-5" />
                </div>
                <div className="flex gap-2 text-white cursor-pointer">
                  <p>عن الشركة</p>
                  <BsFillInfoCircleFill className="text-primary h-5 w-5" />
                </div>
              </div>
            )}
          </div>
          <div className=" ">
            {/*  */}
            {/* text  */}
            <div className="   text-light b  ">
              <div className=" mx-14 ">
                <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row justify-between items-center ">
                  <div className="  sm:w-full md:w-[662px] lg:w-[662px] w-full ">
                    <div className="w-full sm:w-full md:w-[75%] lg:w-[75%]">
                      <div>
                        <p className=" text-right mb-3 text-[40px]">
                          : املأ المعلومات الاتية
                        </p>
                        <div className=" flex justify-between w-full">
                          <input
                            type="text"
                            className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-[313px] "
                            placeholder="الاسم الاخير  "
                          />
                          <input
                            type="text"
                            className=" bg-dark p-3 mt-5 text-right rounded-md  w-[313px]"
                            placeholder="الاسم الاول  "
                          />
                        </div>
                        <input
                          type="text"
                          className=" bg-dark  w-full p-3 mt-5 text-right rounded-md"
                          placeholder="البريد الالكتروني "
                        />
                      </div>
                      <div className=" flex justify-between ">
                        <input
                          type="text"
                          className=" bg-dark p-3 mt-5 text-right rounded-md w-1/4"
                          placeholder=" +946 "
                        />
                        <input
                          type="text"
                          className=" bg-dark p-3 mt-5 ml-3 text-right rounded-md w-3/4"
                          placeholder="رقم الهاتف  "
                        />
                      </div>
                      <div className=" flex justify-between w-full">
                        <input
                          type="text"
                          className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-1/2"
                          placeholder="البلد / المحافظة  "
                        />
                        <input
                          type="text"
                          className=" bg-dark p-3 mt-5 text-right rounded-md w-1/2"
                          placeholder="البلد / المحافظة  "
                        />
                      </div>
                      <input
                        type="text"
                        className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-full"
                        placeholder="صف نفسك ؟"
                      />
                      <div>
                        <button className="rounded-lg bg-primary p-4 mt-6 w-full text-white">
                          اشترك مجانا
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full sm:w-full md:w-1/2 lg:w-1/2   text-right ">
                    <h1 className="  text-[40px]" dir="rtl">
                      هل تود الإنضمام الى القائمة
                      <br />
                      البريدية الخاصة{" "}
                      <span dir="rtl">
                        <span>بـ</span>
                        <span className="text-primary ">TNFX</span>؟
                      </span>
                    </h1>
                    <h1 className="text-[25px] pt-4 font-light">
                      لتحصل على آخر الأخبار, التحليلات, العروض الحصرية ومواعيد
                      العطل الرسمية للأسواق العالمية.
                    </h1>
                    <button className="rounded-lg bg-primary h-[65px] w-[160px] mt-4 text-white text-[25px] ">
                      تخطي
                    </button>
                  </div>
                </div>
                <div className=" flex justify-between mt-14">
                  <div className=" flex justify-between gap-2 text-[21pxx]">
                    <h1>Copyright © 2022 TNFX</h1>
                    <h1 className="h-[25px] w-[3px] bg-primary"></h1>
                    <h1>Powered by TNFX </h1>
                  </div>
                  <div className=" flex justify-between gap-2 text-[21px]]">
                    <h1>Privacy Policy</h1>
                    <h1 className="h-[25px] w-[3px] bg-primary"></h1>
                    <h1> Terms & Conditions</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="w-[65px] z-20  flex-col items-center justify-center gap-6 bg-dark hidden sm:hidden md:flex lg:flex">
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
    </div>
  );
}

export default App;
