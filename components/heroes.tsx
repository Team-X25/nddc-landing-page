import React from "react";
import { Card, CardContent } from "./ui/card";
import ArrowUp from "@/public/assets/icons/arrow-up";
import { heroes } from "@/constants/heroes";


const Heroes = () => {
  return (
    <section className="bg-black min-h-screen p-10 flex flex-col justify-center items-center">
      <header className="text-center text-white flex flex-col gap-4 w-full max-w-[730px] px-5">
        <h1 className="text-4xl font-times">HEROES FROM THE DELTA</h1>
        <p className="text-lg">Notable political activists and heroes from the Niger Delta, who have made significant contributions through advocacy, literature, political leadership, environmental justice, and cultural preservation.</p>
      </header>

      <div className="mt-12 flex-wrap grid grid-cols-3 justify-center">
        {heroes.map ((hero) => <Card key={hero.hero} className="h-[538px] w-[443px] rounded-none border-none p-4 flex justify-end  bg-cover bg-center"
          style={{backgroundImage: `url(${hero.image.src})`}}
        >
          <CardContent className="relative bottom-0 bg-white w-fit p-2 flex flex-row items-center">
            <h1 className="text-2xl font-times">{hero.hero}</h1>
            <ArrowUp/>
          </CardContent>
        </Card>)}
      </div>
    </section>
  );
};

export default Heroes;
