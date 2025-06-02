import React from "react";
import Image from "next/image";
import LinkToIconWhite from "@/public/assets/icons/link-to-white";
import { artworks } from "@/constants/arts";

import type { StaticImageData } from "next/image";

const ArtCard = ({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) => (
  <div className="p-0 border-none rounded-none gap-0">
    <div className="h-[455px] w-[318px] p-0">
      <Image src={image} alt={title} height={455} width={318} />
    </div>
    <div className="bg-black flex items-center gap-3 px-0 pt-4 text-white">
      <p className="text-lg">{title}</p>
      <LinkToIconWhite />
    </div>
  </div>
);

const Art = () => {
  return (
    <section className="bg-black min-h-screen py-50 px-10 flex flex-col justify-center items-center">
      <header className="text-center text-white flex flex-col gap-4">
        <h1 className="text-4xl font-times">ART FROM THE DELTA</h1>
        <p>Explore the Collection</p>
      </header>
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {artworks.map((art, index) => (
          <ArtCard key={index} title={art.title} image={art.image} />
        ))}
      </div>
    </section>
  );
};

export default Art;
