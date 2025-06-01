import React from "react";
import { Card, CardContent } from "./ui/card";
import ekpo from "@/public/assets/events/ekpo.jpg";
import ekpe from "@/public/assets/events/ekpe.jpg";
import okere from "@/public/assets/events/okere.jpg";
import okere2 from "@/public/assets/events/okere2.jpg";

const Events = () => {
  return (
    <section className="bg-black min-h-screen p-10 flex flex-col justify-center items-center">
      <header className="text-center text-white flex flex-col gap-4">
        <h1 className="text-4xl font-times">EVENTS AND FESTIVALS FROM THE DELTA</h1>
        <p>Explore the Collection</p>
      </header>
      <main className="w-full flex flex-row justify-center items-center mt-10 gap-5">
         <Card className="p-0 border-none flex flex-row h-[605px] rounded-none gap-0 w-[45%]">
          <CardContent className="p-5 bg-[#B3BCBF] w-full max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Ekpo Masquerade Festival</h1>
              <p className="text-base ">August - October</p>
            </div>
            <div>
              <p className="">A secret society masquerade festival celebrating ancestral spirits. <br/>
                Ekpo dancers wear fierce masks and perform symbolic rituals.
                Celebrated amongst Ibibio and Annang communities.</p>
            </div>
          </CardContent>
          <CardContent
            className="w-full bg-cover bg-center "
            style={{backgroundImage: `url(${ekpo.src})`}}
          />
        </Card>
        <Card className="p-0 border-none flex flex-row h-[605px] rounded-none gap-0 w-[45%]">
          <CardContent className="p-5 bg-[#F57C23] w-full max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Okere Juju Festival</h1>
              <p className="text-base ">July</p>
            </div>
            <div>
              <p className="">Celebrated by the Itsekiri people.
                A secretive, spiritual festival featuring masked figures and initiations.
                Women and non-initiates are often restricted from participating.</p>
            </div>
          </CardContent>
          <CardContent
            className="w-full bg-cover bg-center "
            style={{backgroundImage: `url(${okere.src})`}}
          />
        </Card>
      </main>
      <main className="w-full flex flex-row justify-center items-center mt-7 gap-5">
         <Card className="p-0 border-none flex flex-row h-[605px] rounded-none gap-0 w-[45%]">
          <CardContent className="p-5 bg-[#2281D9] w-full max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Ekpe Festival</h1>
              <p className="text-base ">December-January</p>
            </div>
            <div>
              <p className="">A secret society festival blending politics, tradition, and ritual. <br/>
              Associated with the revered “Nsibidi” writing system.
              Includes processions, chants, and symbolic animal dances..</p>
            </div>
          </CardContent>
          <CardContent
            className="w-full bg-cover bg-center "
            style={{backgroundImage: `url(${ekpe.src})`}}
          />
        </Card>
        <Card className="p-0 border-none flex flex-row h-[605px] rounded-none gap-0 w-[45%]">
          <CardContent className="p-5 bg-[#342F2C] w-full max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Okere Juju Festival</h1>
              <p className="text-base ">July</p>
            </div>
            <div>
              <p className="">Celebrated by the Itsekiri people. <br/>
                A secretive, spiritual festival featuring masked figures and initiations.
                Women and non-initiates are often restricted from participating.</p>
            </div>
          </CardContent>
          <CardContent
            className="w-full bg-cover bg-center "
            style={{backgroundImage: `url(${okere2.src})`}}
          />
        </Card>
      </main>
    </section>
  );
};

export default Events;
