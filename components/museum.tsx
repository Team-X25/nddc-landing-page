import React from "react";
import BackgroundImage from "@/public/assets/museum.jpg";
import { Button } from "./ui/button";

const Museum = () => {
  return (
    <main className="min-h-screen h-full flex flex-col gap-10 items-center w-screen bg-cover bg-center relative -z-1"
      style={{backgroundImage: `url(${BackgroundImage.src})`}}
    >
        <div className="text-center mt-40">
          <h1 className="text-7xl font-times text-[#55453B]">EXPERIENCE <br/> THE <br/> HERITAGE MUSEUM</h1>
        </div>
        <Button variant="ghost" className="cursor-pointer text-popins">Start guided Tour</Button>
    </main>
  );
};

export default Museum;
