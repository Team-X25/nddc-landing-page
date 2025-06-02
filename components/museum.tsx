import React from "react";
import BackgroundImage from "@/public/assets/museum.jpg";
import { Button } from "./ui/button";

const Museum = () => {
  return (
    <main
      className="min-h-screen h-full flex flex-col gap-6 sm:gap-8 md:gap-10 items-center w-screen bg-cover bg-center relative -z-1"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="text-center mt-20 sm:mt-32 md:mt-40 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-times text-[#55453B] leading-tight">
          EXPERIENCE <br /> THE <br /> HERITAGE MUSEUM
        </h1>
      </div>
      <Button
        variant="ghost"
        className="cursor-pointer text-popins text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3"
      >
        Start guided Tour
      </Button>
    </main>
  );
};

export default Museum;