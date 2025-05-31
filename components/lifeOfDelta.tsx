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
    const section = sectionRef.current;
    const scrollContainer = horizontalRef.current;

    if (!section || !scrollContainer) return;

    const totalScrollWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth;

    // Horizontal scroll animation
    const horizontalScroll = gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () =>
          `${scrollContainer.scrollWidth - viewportWidth + window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Background transition for the 2nd card
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

    // Background transition for the 7th card
    ScrollTrigger.create({
      trigger: scrollContainer.children[3],
      containerAnimation: horizontalScroll,
      start: "left center",
      end: "right center",
      markers: true,
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1E1E1E] text-white min-h-screen py-[5rem]"
    >
      <div ref={horizontalRef} className="flex gap-20 w-max px-[20px]">
        <div className="shrink-0 w-[45vw]">
          <h2 className="text-[clamp(36px,5vw,72px)] font-times leading-[100%] mb-8">
            Discover the Life and Times of the Niger Delta People
          </h2>
          <p className="text-[clamp(14px,1.46vw,21px)] mb-4">
            We encourage you to immerse yourself fully:
          </p>
          <ul className="text-[clamp(14px,1.46vw,21px)] list-disc pl-5 mb-8">
            <li>Browse through centuries-old manuscripts and documents</li>
            <li>Listen to oral histories and songs in native tongues</li>
            <li>Interact with 3D artifacts and explore ancient kingdoms</li>
            <li>Contribute your voice to this growing digital legacy</li>
          </ul>
        </div>

        <div className="flex gap-[5rem]">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="shrink-0 bg-cover bg-center rounded-4xl"
              style={{
                width: "clamp(260px, 29.93vw, 431px)",
                height: "clamp(480px, 75.59vh, 774px)",
                padding: "clamp(12px, 1.11vw, 16px)",
                backgroundImage: `url(${item.bgImage.src})`,
              }}
            >
              <div className="flex flex-col justify-end items-center gap-4 h-full">
                <h4 className="text-[clamp(14px,1.666vw,24px)] text-center font-medium leading-[100%]">
                  {item.title}
                </h4>
                <p className="text-[clamp(14px,1.25vw,18px)] text-center">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-[clamp(14px,1.25vw,18px)]">Explore more</p>
                  <LinkToIconWhite />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeOfDelta;
