"use client";
import React, { useEffect, useRef } from "react";
import Bg1 from "@/public/assets/h-scroll-image-1.png";
import Bg2 from "@/public/assets/h-scroll-image-2.jpg";
import Bg3 from "@/public/assets/h-scroll-image-3.png";
import Bg4 from "@/public/assets/h-scroll-image-4.jpg";
import Bg5 from "@/public/assets/h-scroll-image-5.jpg";
import Bg6 from "@/public/assets/h-scroll-image-6.jpg";
import LinkToIconWhite from "@/public/assets/icons/link-to-white";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIcon from "@/public/assets/icons/scroll-icon";

gsap.registerPlugin(ScrollTrigger);

const LifeOfDelta = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const cardData = [
    {
      bgImage: Bg1,
      title: "Urhobo Resistance and Political Identity",
      description:
        "As the British consolidated colonial rule in the 1900s, the Urhobo people pushed back, organizing traditional governance systems to protect their land and identity. Their fight for political representation continues to shape Delta State politics today.",
    },
    {
      bgImage: Bg2,
      title: "The Benin Kingdom of Edo State",
      description:
        "Once a global power, the Benin Kingdom thrived for centuries with sophisticated art, governance, and diplomacy. The British punitive expedition of 1897, which led to the looting of priceless Benin Bronzes, remains one of the most pivotal events in African colonial history.",
    },
    {
      bgImage: Bg3,
      title: "The Ogoni and the Legacy of Ken Saro-Wiwa",
      description:
        "The Ogoni people of Rivers State shook the world with their peaceful protest movement against oil companies. Led by writer and activist Ken Saro-Wiwa, the movement demanded ecological reform and political inclusion, ultimately leading to his controversial execution in 1995 — a turning point in Nigeria’s human rights discourse.",
    },
    {
      bgImage: Bg4,
      title: "Itsekiri and the Era of European Trade",
      description:
        "The Itsekiri kingdom, centered around Warri, engaged in trade with Portuguese explorers as early as the 15th century. This long-standing contact influenced their monarchy, architecture, and even naming conventions, merging West African and European cultural streams.",
    },
    {
      bgImage: Bg5,
      title: "The Efik and the Nsibidi Writing System",
      description:
        "The Itsekiri kingdom, centered around Warri, engaged in trade with Portuguese explorers as early as the 15th century. This long-standing contact influenced their monarchy, architecture, and even naming conventions, merging West African and European cultural streams.",
    },
    {
      bgImage: Bg6,
      title: "Ijaw Nation and the Struggle for Environmental Justice",
      description:
        "The Ijaw people, deeply rooted in the creeks of Bayelsa and Rivers, became global symbols of resistance during the Niger Delta oil crisis. Their call for environmental justice, especially during the early 2000s, drew attention to oil exploitation and its devastating impact on local livelihoods.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this runs only in the browser

    const section = sectionRef.current;
    const scrollContainer = horizontalRef.current;

    if (!section || !scrollContainer) return;

    const viewportWidth = window.innerWidth;

    if (viewportWidth < 1024) {
      // Disable horizontal scrolling for smaller devices
      scrollContainer.style.display = "block";
      scrollContainer.style.flexWrap = "wrap";
    } else {
      const totalScrollWidth = scrollContainer.scrollWidth;
      const adjustedScrollDistance = totalScrollWidth - viewportWidth;

      const horizontalScroll = gsap.to(scrollContainer, {
        x: -adjustedScrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `${totalScrollWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      ScrollTrigger.create({
        trigger: scrollContainer.children[1],
        containerAnimation: horizontalScroll,
        start: "left center",
        end: "right center",
        scrub: true,
        onEnter: () => {
          gsap.to(section, {
            background: "linear-gradient(270deg, #978B82 0%, #1E1E1E 100%)",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            backgroundColor: "#1E1E1E",
            duration: 1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: scrollContainer.children[3],
        containerAnimation: horizontalScroll,
        start: "left center",
        end: "right center",
        scrub: true,
        onEnter: () => {
          gsap.to(section, {
            background: "linear-gradient(270deg, #C7783E 0%, #978B82 100%)",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            background: "linear-gradient(270deg, #978B82 0%, #1E1E1E 100%)",
            duration: 1,
          });
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1E1E1E] text-white min-h-screen py-[5rem] overflow-hidden"
    >
      <div
        ref={horizontalRef}
        className="flex lg:flex-nowrap flex-wrap gap-20 w-full lg:w-max px-[clamp(10px,5%,20px)]"
      >
        <div className="shrink-0 lg:w-[clamp(300px,45vw,600px)] w-full">
          <h2 className="text-[clamp(24px,5vw,72px)] font-times leading-[100%] mb-8">
            Discover the Life and Times of the Niger Delta People
          </h2>
          <p className="text-[clamp(12px,1.46vw,21px)] mb-4">
            We encourage you to immerse yourself fully:
          </p>
          <ul className="text-[clamp(12px,1.46vw,21px)] list-disc pl-5 mb-8">
            <li>Browse through centuries-old manuscripts and documents</li>
            <li>Listen to oral histories and songs in native tongues</li>
            <li>Interact with 3D artifacts and explore ancient kingdoms</li>
            <li>Contribute your voice to this growing digital legacy</li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-[clamp(20px,5rem,80px)]">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="shrink-0 bg-cover bg-center rounded-4xl w-full lg:w-[clamp(200px,29.93vw,431px)] h-[clamp(300px,75.59vh,774px)] p-[clamp(8px, 1.11vw, 16px)]"
              style={{
                backgroundImage: `url(${item.bgImage.src})`,
              }}
            >
              <div className="flex flex-col justify-end items-center gap-4 h-full">
                <h4 className="text-[clamp(12px,1.666vw,24px)] text-center font-medium leading-[100%]">
                  {item.title}
                </h4>
                <p className="text-[clamp(12px,1.25vw,18px)] text-center">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-[clamp(12px,1.25vw,18px)]">Explore more</p>
                  <LinkToIconWhite />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end flex-wrap gap-3 mt-[clamp(10px,5%,20px)] pr-[clamp(10px,5%,20px)]">
        <p className="text-[clamp(12px,1.25vw,18px]">Scroll for more</p>
        <ScrollIcon />
      </div>
    </section>
  );
};

export default LifeOfDelta;
