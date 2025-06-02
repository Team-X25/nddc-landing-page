import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/assets/nddc-logo.svg";
import MenuIconBlack from "@/public/assets/icons/menu-icon-black";
import CloseIcon from "@/public/assets/icons/close-icon";

interface NavbarProps {
  textColor: string;
}

const Navbar = ({ textColor }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    "EXPLORE",
    "LIBRARY",
    "MUSEUM",
    "NEWS",
    "ABOUT",
    "PUBLICATION",
    "MEDIA",
    "JOIN & SUPPORT",
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-transparent">
        <div className="container flex items-center justify-between py-4 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="The NDDC Logo"
              className="w-[clamp(40px,5vw,80px)]"
            />
            <p
              className="font-times text-[clamp(14px,1.666vw,24px)]"
              style={{ color: textColor }}
            >
              NDDC
            </p>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <p
              className="text-[clamp(14px,1.666vw,24px)] font-times"
              style={{ color: textColor }}
            >
              MENU
            </p>
            <MenuIconBlack textColor={textColor} />
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 lg:h-[152px] z-50 bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-4 container">
          <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="The NDDC Logo"
                className="w-[clamp(40px,5vw,80px)]"
              />
              <p className="font-times text-[clamp(14px,1.666vw,24px)] text-[#1E1E1E]">
                NDDC
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-times">
              {menuLinks.map((link) => (
                <div
                  key={link}
                  className="border-t-[3px] border-[#1E1E1E] pt-2"
                >
                  <a
                    href="#"
                    className="text-[clamp(14px,1.666vw,24px)] text-[#1E1E1E] font-times"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <p className="text-[clamp(14px,1.666vw,24px)] font-times">
                CANCEL
              </p>
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
