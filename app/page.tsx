"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Archives from "@/components/archives";
import Art from "@/components/art";
import Events from "@/components/events";
import Explore from "@/components/explore";
import Header from "@/components/header";
import Heroes from "@/components/heroes";
import LifeOfDelta from "@/components/lifeOfDelta";
import Footer from "@/components/footer";
import MapPage from "@/components/map";

const Home = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const navbarRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState("header");

  const sectionList = [
    { id: "header", component: <Header /> },
    { id: "explore", component: <Explore /> },
    { id: "lifeOfDelta", component: <LifeOfDelta /> },
    { id: "map", component: <MapPage /> },
    { id: "art", component: <Art /> },
    { id: "heroes", component: <Heroes /> },
    { id: "events", component: <Events /> },
    { id: "archives", component: <Archives /> },
    { id: "footer", component: <Footer /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const navRect = navbarRef.current.getBoundingClientRect();

      const navTop = navRect.top;
      const navBottom = navRect.bottom;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const section = sectionRefs.current[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < navBottom && rect.bottom > navTop) {
            const sectionId = section.getAttribute("data-section");
            if (sectionId && sectionId !== activeSection) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const getTextColor = () => {
    switch (activeSection) {
      case "header":
      case "map":
        return "#1E1E1E";

      case "explore":
      case "heroes":
      case "lifeOfDelta":
      case "events":
      case "art":
      case "archives":
      case "footer":
        return "#FFFFFF";
      default:
        return "#1E1E1E";
    }
  };

  return (
    <>
      <nav ref={navbarRef} className="sticky top-0 z-50">
        <Navbar textColor={getTextColor()} />
      </nav>
      <main>
        {sectionList.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-section={section.id}
          >
            {section.component}
          </section>
        ))}
      </main>
    </>
  );
};

export default Home;
