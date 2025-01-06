'use client'

import { useContext } from "react";

// translation
import { useTranslations } from "next-intl";

// components 
import Search from "./Search";

// context 
import { SearchContext } from "../context/search";

// next image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "/variants";

import  LanguageToggle  from "./LanguageToggle";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  const t = useTranslations("Hero");

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"} 
              viewport={{ once: false, amount: 0.6}}
              className="h1"
            >
              {t("title")} <span className="text-accent">{t("title-featured")}</span>{" "}
              {t("title-continuation")}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"} 
              viewport={{ once: false, amount: 0.6}}            
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              {t("paragraph")}
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"} 
              viewport={{ once: false, amount: 0.8}} 
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* btn appstore */}
              <button className="btn-cta">
                <Image 
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt={t("button-app-store")}
                />
              </button>
              {/* btn google */}
              <button className="btn-cta">
                <Image 
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt={t("button-google-play")}
                />
              </button>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.6}} 
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] ">
            {/*Retirei o "xl:absolute" e o "xl:top-48" para a imagem se posicionar como no tutorioal*/}
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt={t("image-car")}
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div 
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }} 
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search/>
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
