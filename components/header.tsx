import React from "react";

const Header = () => {
  return (
    <header className="container px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <h1 className="text-[clamp(36px,8.33vw,120px)] text-[#342F2C] font-times text-center flex flex-col leading-[100%]">
          <span className="text-[clamp(18px,3.75vw,54px)]">THE </span>
          <span>NIGER DELTA </span>
          <span>HERITAGE MUSEUM </span>
        </h1>

        <p className="text-[clamp(12px,1.666vw,24px)] text-[#342F2C] max-w-[90%] sm:max-w-[828px] w-full text-center">
          Discover the rich cultural heritage, traditional crafts, environmental
          treasures, and development achievements of the Niger Delta region
          through immersive 3D exhibits and interactive displays.
        </p>

        <button className="bg-[#342F2C] rounded-[8px] py-2 sm:py-4 px-6 sm:px-12 text-white cursor-pointer text-[clamp(12px,1.666vw,16px)]">
          View Exhibits
        </button>
      </div>
    </header>
  );
};

export default Header;
