"use client";
import React from "react";
import Bg from "@/public/assets/explore-section-bg.jpg";
import LinkToIcon from "@/public/assets/icons/link-to";

const Explore = () => {
  const ExploreData = [
    {
      value: "40",
      label: "Ethnic Groups",
    },
    {
      value: "250",
      label: "Dialects spoken",
    },
    {
      value: "5,000",
      label: "Artifacts",
    },
    {
      value: "20",
      label: "Interactive Galleries",
    },
    {
      value: "500+",
      label: "Historical Photos",
    },
  ];

  return (
    <section
      className="min-h-screen bg-cover bg-center mt-12 pt-[5rem]"
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      <div className="container h-full flex flex-col justify-end gap-[12rem]">
        <div className="flex items-center justify-around flex-wrap">
          {ExploreData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white font-times"
            >
              <p className="text-[clamp(48px,6.944vw,100px)] leading-[100%]">
                {item.value}
              </p>
              <p className="text-[clamp(14px,1.666vw,24px)]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[774px] w-full p-8 bg-white flex flex-col gap-6">
          <h4 className="text-[clamp(18px,2.5vw,36px)] leading-[100%] text-[#342F2C]">
            Explore. Discover. Connect.
          </h4>
          <p className="text-[clamp(14px,1.666vw,24px)] text-[#342F2C] max-w-[726px]">
            Step into a world where history lives, culture speaks, and stories
            echo through time. The Niger Delta Digital Museum invites you to
            embark on an unforgettable journey through the rich heritage of one
            of Africa’s most diverse and dynamic regions. <br />
            This is more than a collection of images or archives — it is a
            living, breathing experience crafted to preserve, celebrate, and
            share the voices, artifacts, and traditions of the Niger
            Delta&apos;s many cultural groups. Here, every photograph, every
            manuscript, every melody and interactive exhibit tells a story —
            your story, our collective story.
          </p>

          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-[clamp(14px,1.666vw,24px)] text-[#342F2C]">
              Explore more
            </p>
            <LinkToIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
