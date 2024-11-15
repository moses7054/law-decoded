"use client";

import React, { useState } from "react";
import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";
import WhatIacon from "@/assets/ReviewAndLinks/whatsapp.svg";
import Image from "next/image";

const ReviewsAndLinks = () => {
  const [num, setNumber] = useState<number>(2);

  return (
    <>
      {/* h = T + S + B */}
      <div className="h-[1173.01px] w-full flex flex-col items-center custom:h-[1132px]">
        {/* Text + buttons */}
        {/* h = s + b */}
        <div className="mt-[108.01px] w-[342px] h-[167.85px] flex flex-col items-center mb-[188.15px] custom:h-[500px] custom:w-[623.5px]  custom:m-0 custom:justify-center">
          <p className="w-full h-[95.72px] font-inter font-normal italic text-[12px] leading-[17.55px] -tracking-[0.22px] text-center mb-[5.21px]  max-xs:w-[300px] custom:h-[174.5px] custom:text-[20px] custom:leading-[32px] custom:mb-[9.5px]">
            “Quis vel eros donec ac odio. Cras tincidunt lobortis feugiat
            vivamus at augue eget arcu dictum. Arcu cursus euismod quis viverra
            nibh cras. accumsan. Neque volutpat ac tincidunt vitae semper. Quis
            vel eros donec ac odio. Cras tincidunt lobortis feugiat vivamus at
            augue eget arcu dictum.”
          </p>
          <p className="font-georgia font-normal text-[14px] leading-[17.55px] mb-[5.07px] custom:text-[22px] custom:leading-[32px] custom:mb-[4px]">
            Rose Schultz
          </p>
          <p className="font-inter font-semibold text-[8px]  leading-[13.16px] tracking-[2.19px] mb-[20.52px] custom:text-[14px] custom:leading-[24px] custom:mb-[45px] custom:tracking-[4px]">
            UI DESIGNER SHADYLABS
          </p>
          <div className="w-[66.92px] h-[9.32px] flex justify-between custom:w-[122px] custom:h-[17px] ">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                num === 0
                  ? "w-[30.72px] bg-[#DD4826] custom:w-[56px] "
                  : "w-[9.32px] bg-[#eea292] custom:w-[17px]"
              } `}
              onClick={() => setNumber(0)}
            ></div>
            <div
              className={`h-full transition-all duration-300 ${
                num === 1
                  ? "w-[30.72px] bg-[#DD4826] rounded-full custom:w-[56px]"
                  : "w-[9.32px] bg-[#eea292] rounded-full custom:w-[17px]"
              } `}
              onClick={() => setNumber(1)}
            ></div>
            <div
              className={`h-full transition-all duration-300 ${
                num === 2
                  ? "w-[30.72px] bg-[#DD4826] rounded-full custom:w-[56px]"
                  : "w-[9.32px] bg-[#eea292] rounded-full custom:w-[17px]"
              } `}
              onClick={() => setNumber(2)}
            ></div>
          </div>
        </div>

        <p className="font-georgia font-normal  text-[32px] leading-[52px] -tracking-[2.4px] text-black custom:mt-[160px] custom:text-[48px] custom:leading-[52px] custom:mb-[56px]">
          Join our community
        </p>

        {/* whatsapp ans youtube combined div */}
        <div className="w-[342px] h-[520.64px] flex flex-col items-center justify-center gap-[34.3px] custom:flex-row custom:w-[1000px] custom:h-[284px] custom:gap-[252px]">
          <div className="w-full h-[243.33px] pt-[23.94px] flex flex-col items-center custom:w-[348px] custom:h-full custom:pt-[28px] ">
            <Image
              src={YouIcon}
              alt="image"
              className="custom:w-[64px] custom:h-[64px]"
            />
            <p className="font-inter font-semibold text-[23.94px] leading-[30.78px] -tracking-[0.27px] text-black mt-[27.36px] mb-[10.26px] custom:mt-[32px] custom:mb-[12px] custom:text-[28px] custom:leading-[36px]">
              Youtube
            </p>
            <p className="font-inter font-medium text-[15.36px] leading-[23.94px] -tracking-[0.17px] text-center custom:text-[18px] custom:leading-[28px] custom:font-normal custom:-tracking-[0.2px]">
              Seamlessly integrate with HMRC,
              <br className="md:hidden" /> accounting software for efficient
              payroll management.
            </p>
          </div>
          <div className="w-full h-[243.33px] pt-[23.94px] flex flex-col items-center custom:w-[348px] custom:h-full custom:pt-[28px]  ">
            <Image
              src={WhatIacon}
              alt="image"
              className="custom:w-[64px] custom:h-[64px]"
            />
            <p className="font-inter font-semibold text-[23.94px] leading-[30.78px] -tracking-[0.27px] text-black mt-[27.36px] mb-[10.26px] custom:mt-[32px] custom:mb-[12px] custom:text-[28px] custom:leading-[36px]">
              Whatsapp Community
            </p>
            <p className="font-inter font-medium text-[15.36px] leading-[23.94px] -tracking-[0.17px] text-center custom:text-[18px] custom:leading-[28px] custom:font-normal custom:-tracking-[0.2px]">
              Seamlessly integrate with HMRC,
              <br className="md:hidden" /> accounting software for efficient
              payroll management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsAndLinks;
