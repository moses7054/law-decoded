import React from "react";
import Image from "next/image";
import LaywerImage from "@/assets/EfficientModel/lawyerPic.png";

const EfficientModel = () => {
  return (
    <>
      {/* only height */}
      <div className="h-[1075px] w-full custom:h-[870px] md:h-[479.8px] flex flex-col items-center   ">
        <p className="text-[48px] custom:text-[48px] md:text-[25px] font-georgia font-normal leading-[52px] -tracking-[2.4px] text-center mb-[40px] custom:mb-[24px] md:mb-[12px] md:leading-[27px] custom:leading-[52px]">
          Sajan Poovayya Mentorship Programme
        </p>
        <p
          className=" w-[844px]  font-inter font-normal text-[17.66px] leading-[28px] -tracking-[0.2px] text-center px-[70px] mb-[30px] text-[#000000BF]
        custom:mb-[56px] md:mb-[29px] max-xs:px-0 max-custom:text-[16px] md:text-[9px] max-custom:w-[338px] md:w-[447px] max-custom:px-0 md:px-0 max-md:w-[300px] md:leading-[14.85px] custom:text-[17.66px] custom:leading-[28px] custom:-tracking-[0.2px] custom:w-[844px] text-justify"
        >
          A unique mentorship programme that offers law students and young
          lawyers an opportunity to engage with real time litigation. We also
          host special seminars and conversations that help young lawyers make
          strides in the profession of law.
        </p>
        <div className="flex flex-col items-center  px-[24px] max-xs:px-0 custom:flex-row md:flex-row custom:w-[1232px] md:w-auto custom:h-[550px] md:h-[291.55px] custom:justify-center md:justify-center custom:gap-[41px] md:gap-[21.73px]">
          {/* Image screen */}
          <div className="w-[342px] h-[270px] rounded-[12px] mb-[30px] custom:h-full md:h-[291.55px] custom:w-[695px] md:w-[368.41px] custom:mb-0 md:mb-0 max-xs:w-[300px]">
            <Image src={LaywerImage} alt="image" />
          </div>
          <div className="flex flex-col items-center custom:h-full md:h-full custom:w-[456px] md:w-[284px] custom:justify-center md:justify-center">
            {/* First box---- */}
            <div
              className="w-[342px] h-[123px] px-[30px] rounded-[9px] border-t-[0.75px] border-[#FC5A5A] flex flex-col justify-center items-center gap-[16.5px] mb-[18px] custom:w-full md:w-full custom:h-[164px] md:h-[87.64px] custom:border-t-[1px] md:border-t-[0.53px] custom:radius-[12px] md:radius-[6.36px] custom:mb-[24px] md:mb-[12.79px] custom:px-[40px] md:px-[21px] max-xs:w-[300px] max-xs:px-0 max-xs:gap-2 md:gap-[11.59px] max-custom:items-start  max-xs:pl-[30px]"
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              {/* firstText */}
              <div className="flex justify-start gap-[4.5px] w-[282px] custom:w-[376px] md:w-[145px] custom:gap-[13px] md:gap-[6.9px] max-xs:w-[250px]  ">
                {/* circle */}
                <div className="rounded-full w-[30px] h-[30px] bg-[#FFF2CF] border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center custom:w-[40px] md:w-[21px] custom:h-[40px] custom:text-[21px] custom:leading-[28px] md:h-[21px] md:text-[11px] md:leading-[14px]">
                  <p>1</p>
                </div>
                <div className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] flex justify-center items-center custom:text-[21px] md:text-[11px] custom:leading-[28px] md:leading-[14px]">
                  <p>About the programme</p>
                </div>
              </div>
              <div className="w-[282px] custom:w-[376px] md:w-[220px] max-xs:w-[250px] ">
                <p className="font-inter font-normal text-[12.0px] leading-[16.5px] text-[#000000BF] custom:text-[14px] md:text-[7.43px] custom:leading-[22px] md:leading-[11.63px]  ">
                  Cut 90% of payroll admin vs. legacy tools or outsourcing.
                  Dramatically increase accuracy.
                  <br className="max-xs:hidden custom:hidden md:hidden" />{" "}
                  User-friendly interface.
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div
              className="w-[342px] h-[78px] py-[24px] pl-[30px] pr-[59.25px] flex justify-start gap-[9.75px] bg-white rounded-[9px] mb-[18px] custom:w-full md:w-full custom:h-[104px] md:h-[55px] custom:radius-[12px] md:radius-[12px] custom:p-0 md:p-0 custom:flex custom:justify-start custom:text-center md:justify-start md:text-center custom:mb-[24px] md:mb-[24px] max-xs:w-[300px] max-xs:gap-[4.5px] max-xs:p-0 max-xs:justify-center max-xs:items-center custom:items-center md:items-center custom:gap-[13px] md:gap-[6.9px] custom:pl-[40px] md:pl-[21.22px] max-custom:items-start "
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              <div className="rounded-full w-[30px] h-[30px] bg-white border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center  custom:h-[40px] md:h-[21.22px] custom:w-[40px] md:w-[21.22px] custom:border-[1px] md:border-[1px] custom:text-[21px] md:text-[11px] custom:leading-[28px] md:leading-[14.85px]">
                <p>2</p>
              </div>
              <div className="flex justify-center items-center max-xs:w-[210px]">
                <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-center custom:text-[21px] md:text-[11.84px] custom:leading-[28px] md:leading-[14.85px]">
                  Application process
                </p>
              </div>
            </div>

            {/* Third Box */}
            <div
              className="w-[342px] h-[78px] py-[24px] pl-[30px] pr-[59.25px] flex justify-start gap-[9.75px] bg-white rounded-[9px] mb-[18px] custom:w-full md:w-full custom:h-[104px] md:h-[55.16px] custom:radius-[12px] md:radius-[12px] custom:p-0 md:p-0 custom:flex custom:justify-start custom:text-center md:justify-start md:text-center custom:mb-[24px] max-xs:w-[300px] max-xs:gap-[4.5px] max-xs:p-0 max-xs:justify-center max-xs:items-center custom:items-center md:items-center custom:gap-[13px] md:gap-[6.9px] custom:pl-[40px] md:pl-[21.22px] max-custom:items-start "
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              <div className="rounded-full w-[30px] h-[30px] bg-white border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center  custom:h-[40px] md:h-[21.11px] custom:w-[40px] md:w-[21.11px] custom:border-[1px] md:border-[1px] custom:text-[21px] md:text-[11.14px] custom:leading-[28px] md:leading-[14.85px]">
                <p>3</p>
              </div>
              <div className="flex justify-center items-center max-xs:w-[210px]">
                <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-center custom:text-[21px] md:text-[11.14px] custom:leading-[28px] md:leading-[14.85px]">
                  Get involved.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EfficientModel;
