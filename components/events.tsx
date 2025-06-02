import React from "react";
import { Card, CardContent } from "./ui/card";
import ekpo from "@/public/assets/events/ekpo.jpg";
import ekpe from "@/public/assets/events/ekpe.jpg";
import okere from "@/public/assets/events/okere.jpg";
import okere2 from "@/public/assets/events/okere2.jpg";
import Image from "next/image";

const Events = () => {
  return (
    <section className="bg-black min-h-screen p-10 flex flex-col justify-center items-center">
      <header className="text-center text-white flex flex-col gap-4">
        <h1 className="text-4xl font-times">EVENTS AND FESTIVALS FROM THE DELTA</h1>
        <p>Explore the Collection</p>
      </header>
      <main className="w-full flex flex-row flex-wrap justify-center items-center mt-10 gap-5">
        <Card className="p-0 border-none flex flex-col sm:flex-row rounded-none gap-0 w-full lg:w-[45%]">
          <CardContent className="p-5 bg-[#B3BCBF] w-full sm:max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Ekpo Masquerade Festival</h1>
              <p className="text-base">August - October</p>
            </div>
            <div>
              <p>
                A secret society masquerade festival celebrating ancestral spirits. <br />
                Ekpo dancers wear fierce masks and perform symbolic rituals. Celebrated amongst Ibibio and Annang communities.
              </p>
            </div>
          </CardContent>
          <div className="relative w-full sm:w-[380px] aspect-[380/605] max-sm:max-h-[400px]">
            <Image
              src={ekpo}
              alt="Ekpo Masquerade"
              fill
              className="object-cover"
            />
          </div>
        </Card>
        <Card className="p-0 border-none flex flex-col sm:flex-row rounded-none gap-0 w-full lg:w-[45%]">
          <CardContent className="p-5 bg-[#F57C23] w-full sm:max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Okere Juju Festival</h1>
              <p className="text-base">July</p>
            </div>
            <div>
              <p>
                Celebrated by the Itsekiri people. A secretive, spiritual festival featuring masked figures and initiations.
                Women and non-initiates are often restricted from participating.
              </p>
            </div>
          </CardContent>
          <div className="relative w-full sm:w-[380px] aspect-[380/605] max-sm:max-h-[400px]">
            <Image
              src={okere}
              alt="Okere Juju Festival"
              fill
              className="object-cover"
            />
          </div>
        </Card>
      </main>
      <main className="w-full flex flex-row flex-wrap justify-center items-center mt-7 gap-5">
        <Card className="p-0 border-none flex flex-col sm:flex-row rounded-none gap-0 w-full lg:w-[45%]">
          <CardContent className="p-5 bg-[#2281D9] w-full sm:max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Ekpe Festival</h1>
              <p className="text-base">December-January</p>
            </div>
            <div>
              <p>
                A secret society festival blending politics, tradition, and ritual. <br />
                Associated with the revered “Nsibidi” writing system. Includes processions, chants, and symbolic animal dances.
              </p>
            </div>
          </CardContent>
          <div className="relative w-full sm:w-[380px] aspect-[380/605] max-sm:max-h-[400px]">
            <Image
              src={ekpe}
              alt="Ekpe Festival"
              fill
              className="object-cover"
            />
          </div>
        </Card>
        <Card className="p-0 border-none flex flex-col sm:flex-row rounded-none gap-0 w-full lg:w-[45%]">
          <CardContent className="p-5 bg-[#342F2C] w-full sm:max-w-[320px] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-times">Okere Juju Festival</h1>
              <p className="text-base">July</p>
            </div>
            <div>
              <p>
                Celebrated by the Itsekiri people. <br />
                A secretive, spiritual festival featuring masked figures and initiations.
                Women and non-initiates are often restricted from participating.
              </p>
            </div>
          </CardContent>
          <div className="relative w-full sm:w-[380px] aspect-[380/605] max-sm:aspect-[380/300] max-sm:max-h-[400px]">
            <Image
              src={okere2}
              alt="Okere Juju Festival"
              fill
              className="object-cover"
            />
          </div>
        </Card>
      </main>
    </section>
  );
};

export default Events;