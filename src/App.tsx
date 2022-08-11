import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function App(): JSX.Element {
  return (
    <div className="flex">
      <div className=" min-h-screen bg-dark-2	">
        <img src="./bg.png" alt="" className=" absolute w-full h-full " />

        <div className="p-10 ">
          {/* navbar */}
          <div className="px-[3rem]">
            <div className=" flex justify-between text-light">
              <div>
                <img src="./tnfx.png" alt="" className=" w-[230px]" />
              </div>
              <div className=" flex justify-between gap-2 text-2xl">
                <h1>الصفحه الرسمية </h1>
                <h1 className="h-[25px] w-[3px] bg-primary mx-4"></h1>
                <h1>عن الشركه</h1>
              </div>
            </div>
          </div>

          {/* line */}
          <div className=" w-full h-1 bg-secondary m-auto mt-4">
            <div className="h-full w-[15.5%] bg-primary"></div>
          </div>
          {/* text  */}
          <div className=" mt-12  text-light">
            <div className="flex justify-between">
              <div className=" w-1/2 m-14">
                <div className="mx-14 ">
                  <div>
                    <p className=" text-right mb-3 text-[40px]">
                      املأ المعلومات التالية:
                    </p>
                    <input
                      type="text"
                      className=" bg-dark  w-full p-3 text-right rounded-md"
                      placeholder="الاسم الكامل"
                    />
                    <input
                      type="text"
                      className=" bg-dark  w-full p-3 mt-5 text-right rounded-md"
                      placeholder="البريد الالكتروني "
                    />
                  </div>
                  <div className=" flex justify-between w-full">
                    <input
                      type="text"
                      className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-1/2"
                      placeholder="البريد  "
                    />
                    <input
                      type="text"
                      className=" bg-dark p-3 mt-5 text-right rounded-md w-1/2"
                      placeholder="البريد الالكتروني "
                    />
                  </div>
                  <div className=" flex justify-between w-full">
                    <input
                      type="text"
                      className=" bg-dark p-3 mt-5 text-right rounded-md w-1/4"
                      placeholder="البريد الالكتروني "
                    />
                    <input
                      type="text"
                      className=" bg-dark p-3 mt-5 ml-3 text-right rounded-md w-3/4"
                      placeholder="هاتف  "
                    />
                  </div>
                  <div className=" flex justify-between w-full">
                    <input
                      type="text"
                      className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-1/2"
                      placeholder="البريد  "
                    />
                    <input
                      type="text"
                      className=" bg-dark p-3 mt-5 text-right rounded-md w-1/2"
                      placeholder="البريد الالكتروني "
                    />
                  </div>
                  <div>
                    <button className="rounded-lg bg-primary p-4 mt-4 w-full text-white">
                      اشترك مجانا
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-1/2 p-10 m-12 text-right">
                <h1 className="  text-[40px]">
                  هل تود الإنضمام الى القائمة البريدية الخاصة
                  <span className="text-primary"> TNFX </span>بـ
                </h1>
                <h1 className="text-2xl pt-4">
                  {" "}
                  لتحصل على آخر الأخبار, التحليلات, العروض الحصرية ومواعيد العطل
                  الرسمية للأسواق العالمية.
                </h1>
                <button className="rounded-lg bg-primary p-4 mt-4 text-white">
                  {" "}
                  تخطي
                </button>
              </div>
            </div>
            <div className=" flex justify-between  p-10 m-12   ">
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
      <ul className="w-[65px] flex flex-col items-center justify-center gap-5 bg-dark">
        <li className="  flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] hover:bg-primary ">
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
            className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] "
          >
            {" "}
            <FaTelegram className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/tnfx.co/?ti=as"
            className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] "
            target="_blank"
          >
            {" "}
            <FaFacebook className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/tnfx.co?igshid=1kr9zqp68pgvt"
            className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] "
            target="_blank"
          >
            {" "}
            <FaInstagram className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/TNFXofficial"
            className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] "
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
            className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] "
          >
            {" "}
            <FaLinkedinIn className="h-5 w-5" />{" "}
          </a>
        </li>
        <li>
          <a
            href="https://vt.tiktok.com/ZSdQBovWa/"
            target="_blank"
            className="flex items-center justify-center text-dark bg-secondary rounded-full w-[38px] h-[38px] "
          >
            <FaTiktok className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
