import { FC } from "react";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <div>
      <div className="flex justify-between flex-col items-center pt-5  mt-10  sm:flex-row md:flex-row lg:flex-row text-white gap-4 m-4 ">
        <div className="">
          <h1
            className="text-[40px]  sm:text-[60px] md:text-[60px] lg:text-[60px] font-ged "
            dir="rtl"
          >
            هل تود الإنضمام الى القائمة
            <br />
            البريدية الخاصة{" "}
            <span dir="rtl">
              <span>بـ</span>
              <span className="text-primary ">TNFX</span>؟
            </span>
          </h1>
          <h1 className="text-[25px] pt-4 font-gedlight">
            لتحصل على آخر الأخبار, التحليلات, العروض الحصرية
            <br />
            ومواعيد العطل الرسمية للأسواق العالمية.
          </h1>
          <button className="rounded-lg bg-primary h-[65px] w-[160px] mt-4 text-white text-[25px] font-ged ">
            تخطي
          </button>
        </div>
        <div className="w-full lg:w-[440px] md:w-[440px] sm:w-full">
          <div className="font-ged">
            <p className=" text-right mb-3 text-[30px]">
              املأ المعلومات التالية:
            </p>
            <div className=" flex justify-between w-full font-ged">
              <input
                type="text"
                className=" bg-dark p-3 mt-5 text-right rounded-md w-1/2 w-[313px]"
                placeholder="الاسم الاول  "
              />
              <input
                type="text"
                className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-[313px] "
                placeholder="الاسم الاخير  "
              />
            </div>
            <input
              type="text"
              className=" bg-dark  w-full p-3 mt-5 text-right  font-ged rounded-md"
              placeholder="البريد الالكتروني "
            />
          </div>
          <div className=" flex justify-between ">
            <input
              type="text"
              className=" bg-dark p-3 mt-5 ml-3 text-right rounded-md w-3/4 font-ged"
              placeholder="رقم الهاتف  "
            />
            <input
              type="text"
              className=" bg-dark p-3 mt-5 text-right rounded-md w-1/4"
              placeholder=" +946 "
            />
          </div>
          <div className=" flex justify-between w-full font-ged">
            <input
              type="text"
              className=" bg-dark p-3 mt-5 text-right rounded-md w-1/2"
              placeholder="البلد / المحافظة  "
            />
            <input
              type="text"
              className=" bg-dark p-3 mt-5 mr-3 text-right rounded-md w-1/2"
              placeholder="البلد / المحافظة  "
            />
          </div>
          <input
            type="text"
            className=" bg-dark p-3 mt-5 text-right rounded-md w-full font-ged"
            placeholder="صف نفسك ؟"
          />
          <div>
            <button className="rounded-lg bg-primary p-4 font-ged mt-6 w-full text-white">
              اشترك مجانا
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-between mt-14 font-sans text-light text-[15px]">
        <div className=" flex justify-between gap-2 text-[21pxx] ">
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
  );
};

export default Content;
