import Image from "next/image";
import React from "react";
import logo from "@/public/assets/nddc-logo.svg";
import YtIcon from "@/public/assets/icons/yt-icon";
import LinkedinIcon from "@/public/assets/icons/linkedin-icon";
import TiktokIcon from "@/public/assets/icons/tiktok-icon";
import XIcon from "@/public/assets/icons/x-icon";
import IgIcon from "@/public/assets/icons/Ig-icon";
import FbIcon from "@/public/assets/icons/fb-icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 relative">
      <div className="flex flex-wrap justify-between gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="The NDDC Logo" />
              <p className="font-times text-[clamp(14px,1.666vw,24px)]">NDDC</p>
            </div>
            <p className="mt-2 text-sm">© 2025 NDDC.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm font-geist">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Socials</p>
              <div className="flex items-center gap-2">
                <YtIcon />
                <a href="#">YouTube</a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon />
                <a href="#">LinkedIn</a>
              </div>
              <div className="flex items-center gap-2">
                <TiktokIcon />
                <a href="#">Tiktok</a>
              </div>
            </div>

            {/* Support Center Socials */}
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Support Center</p>
              <div className="flex items-center gap-2">
                <XIcon />
                <span>(Formerly Twitter)</span>
              </div>
              <div className="flex items-center gap-2">
                <IgIcon />
                <span>Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <FbIcon />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          <div className="text-sm flex flex-col gap-6">
            <p className="font-semibold">Company</p>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
            <a href="#">Support</a>
          </div>

          <div className="text-sm flex flex-col gap-6">
            <p className="font-semibold">Legal</p>
            <a href="#">Terms of Service</a>
            <a href="#">Order Cancellation Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">KYC/AML Policy</a>
          </div>

          <div className="text-sm flex flex-col gap-6">
            <p className="font-semibold">Support Center</p>
            <a href="#">Contact Us</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-[5%] left-0 right-0 flex justify-center items-center">
        <p className="text-[clamp(100px,15vw,289px)] text-[#342F2C] font-inter font-semibold tracking-[-6%] pointer-events-none">
          NDDC
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
