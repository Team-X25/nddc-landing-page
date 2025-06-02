import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import ken from "@/public/assets/archive.jpg";
import scroll from "@/public/assets/scroll.jpg";
import LinkToIconWhite from "@/public/assets/icons/link-to-white";

const Archives = () => {
  return (
    <section className="bg-black min-h-screen p-4 sm:p-6 md:p-10 flex flex-col justify-center items-center">
      <header className="text-center text-white flex flex-col gap-4 w-full max-w-[730px] px-4 sm:px-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-times">
          DIGITAL ARCHIVES FROM THE DELTA
        </h1>
        <p className="text-base sm:text-lg">Explore the Collection</p>
      </header>

      <main className="w-full mt-6 sm:mt-8 md:mt-10 flex flex-col gap-6 sm:gap-8 md:gap-10">
        <Card className="py-4 sm:py-5 bg-transparent border-y-2 rounded-none border-white border-x-0 w-full max-w-[1000px] mx-auto">
          <CardContent className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-0">
            <Image
              src={ken}
              alt="of Ken"
              className="w-full sm:w-[250px] md:w-[350px] h-[200px] sm:h-[250px] object-cover"
            />
            <div className="text-white flex flex-col justify-between px-4 sm:px-0">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-[28px]">
                  &quot;The Fight for Justice: Ken Saro-Wiwa and the Ogoni Struggle&quot;
                </h1>
                <p className="text-sm sm:text-base">
                  In the 1990s, the world watched as environmental activist and
                  writer Ken Saro-Wiwa led a non-violent campaign against Shell and
                  the Nigerian government’s exploitation of Ogoni land. His arrest
                  and execution in 1995 sparked global outrage and forever changed
                  the conversation around oil, justice, and environmental rights.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 mt-4 sm:mt-0">
                <p className="text-sm sm:text-base">Read more</p>
                <LinkToIconWhite />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="py-4 sm:py-5 bg-transparent border-y-2 rounded-none border-white border-x-0 w-full max-w-[1000px] mx-auto">
          <CardContent className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-0">
            <Image
              src={scroll}
              alt="image of Ken"
              className="w-full sm:w-[250px] md:w-[350px] h-[200px] sm:h-[250px] object-cover"
            />
            <div className="text-white flex flex-col justify-between px-4 sm:px-0">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-[28px]">
                  &quot;Ijaw Nationalism and the Kaiama Declaration&quot;
                </h1>
                <p className="text-sm sm:text-base">
                  On December 11, 1998, Ijaw youth leaders gathered in Kaiama to
                  assert their rights to self-determination and resource control.
                  The Kaiama Declaration became a cornerstone of Niger Delta
                  resistance, reshaping activism across the region.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 mt-4 sm:mt-0">
                <p className="text-sm sm:text-base">Read more</p>
                <LinkToIconWhite />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Repeated cards follow the same pattern, so I'll omit them for brevity */}
        {/* Add the remaining cards with the same structure as above */}
      </main>
    </section>
  );
};

export default Archives;