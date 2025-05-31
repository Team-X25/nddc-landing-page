import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <h1 className="text-[clamp(48px,8.33vw,120px)] text-[#342F2C] font-times text-center flex flex-col leading-[100%]">
          <span className="text-[clamp(24px,3.75vw,54px)]">THE </span>
          <span>NIGER DELTA </span>
          <span>HERITAGE MUSEUM </span>
        </h1>

        <p className="text-[clamp(14px,1.666vw,24px)] text-[#342F2C] max-w-[828px] w-full text-center">
          Discover the rich cultural heritage, traditional crafts, environmental
          treasures, and development achievements of the Niger Delta region
          through immersive 3D exhibits and interactive displays.
        </p>

        <button className="bg-[#342F2C] rounded-[8px] py-4 px-12 text-white cursor-pointer">
          View Exhibits
        </button>
      </div>
    </header>
  );
};

export default Header;
