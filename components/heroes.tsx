import React from "react";
import { Card, CardContent } from "./ui/card";
import ArrowUp from "@/public/assets/icons/arrow-up";
import { heroes } from "@/constants/heroes";

const Heroes = () => {
  return (
    <section className="bg-black min-h-screen py-50 px-10 flex flex-col justify-center items-center">
      <header className="text-center text-white flex flex-col gap-4 w-full max-w-[730px] px-5">
        <h1 className="text-4xl font-times">HEROES FROM THE DELTA</h1>
        <p className="text-lg">
          Notable political activists and heroes from the Niger Delta, who have
          made significant contributions through advocacy, literature, political
          leadership, environmental justice, and cultural preservation.
        </p>
      </header>

      <div className="mt-12 flex-wrap grid group-last:id-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {heroes.map((hero) => (
          <Card
            key={hero.hero}
            className="h-[400px] w-[323px] sm:h-[358px] sm:w-[343px] lg:h-[538px] lg:w-[443px] rounded-none border-none p-4 flex justify-end  bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.image.src})` }}
          >
            <CardContent className="relative bottom-0 bg-white w-fit p-2 flex flex-row items-center">
              <h1 className="text-2xl font-times">{hero.hero}</h1>
              <ArrowUp />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Heroes;
