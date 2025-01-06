"use client"

// import swipper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";

// translation
import { useTranslations } from "next-intl";

// next image
import Image from "next/image";

// icons 
import { FaStar } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";


export default function CarSlider() {

  const t = useTranslations("CarSlider");

  const cars = [
    {
      type: "Hatchback",
      name: "Ford Focus",
      price: 29,
      stars: 3.5,
      image: "images/carSlider/car01.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: `${t("manual")}`,
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: `5 ${t("seats")}`,
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: `${t("gas")}`,
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: `1600 ${t("hp")}`,
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: `${t("front")}`,
        },
      ],
    },
    {
      type: "Sedan",
      name: "Toyota Corolla",
      price: 25,
      stars: 5,
      image: "images/carSlider/car02.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: `${t("manual")}`,
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: `5 ${t("seats")}`,
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: `${t("gas")}`,
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: `1600 ${t("hp")}`,
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: `${t("front")}`,
        },
      ],
    },
    {
      type: "SUV",
      name: "Honda CR-V",
      price: 35,
      stars: 4.7,
      image: "images/carSlider/car03.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: t("manual"),
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: `5 ${t("seats")}`,
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: t("gas"),
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: `1600 ${t("hp")}`,
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: t("front"),
        },
      ],
    },
    {
      type: t("convertible"),
      name: "Mazda MX-5",
      price: 32,
      stars: 4.9,
      image: "images/carSlider/car02.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: `${t("manual")}`,
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: `5 ${t("seats")}`,
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: `${t("gas")}`,
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: `1600 ${t("hp")}`,
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: `${t("front")}`,
        },
      ],
    },
  ];

  return (
    <motion.div 
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15},
          640: { slidesPerView: 2, spaceBetween: 32},
          1260: { slidesPerView: 3, spaceBetween: 32},
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <Image src={car.image} width={380} height={284} alt=""/>
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">    
                      {car.name}
                    </h3>
                    <div className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/{t("day")}
                    </div>
                  </div>
                  {/* stars */}
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 mb-10 w-max mx-auto ">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image 
                            src={item.icon} 
                            width={24} 
                            height={24} 
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">
                          {item.text}
                        </div>                        
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">{t("see-details")}</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
