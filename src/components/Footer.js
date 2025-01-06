"use client";

// next image
import Image from "next/image";

import { useTranslations } from "next-intl";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa";

// components
import Copyright from "./Copyright";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// link / react scroll
import { Link } from "react-scroll";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} 
          className="flex flex-col lg:flex-row lg:justify-between gap-x-14 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-4 ">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo.svg"} width={200} height={200} alt=""/>
            </Link>
            {/* text */}
            <div className="text-secondary">
              {t("carland-description")}
            </div>
            
          </div>
          
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-5">{t("business-hours")}</h3>

            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">{t("mon-fri")}:</div>
                <div className="font-semibold">9:00AM - 8:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">{t("sat")}:</div>
                <div className="font-semibold">9:00AM - 6:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">{t("sun")}:</div>
                <div className="font-semibold">{t("closed")}</div>
              </div>
            </div>
          </div>

          {/* newsletter */}
          <div className="flex-1 ">
            <h3 className="h3 font-bold ">{t("title-contact")}</h3>

            <div className="flex flex-col gap-y-4">
              <p className="text-secondary">
                {t("paragraph-contact")}
              </p>

              {/* phone & email */}
              <div className="flex flex-col gap-y-4 font-semibold">
                {/* phone */}
                <div className="flex items-center gap-x-[10px]">
                  <FaPhone/>
                  <div className="font-medium">(21) 96869-5409</div>
                </div>
                {/* email */}
                <div className="flex items-center gap-x-[10px]">
                  <FaEnvelope />
                  <div className="font-medium">office@carland.com</div>
                </div> 
              </div>

              {/* form */}
              <form className="flex gap-x-3 h-14">
                <input
                  type="text"
                  placeholder="E-mail..."
                  className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
                />
                <button type="submit" className="btn btn-sm btn-accent w-24">
                  {t("button-submit")}
                </button>
              </form>

            </div>
            
          </div>
        </motion.div>
      </div>      
      <Copyright/>
    </footer>
  );
}
