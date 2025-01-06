"use client"

// next image
import Image from "next/image";

import { useTranslations } from "next-intl";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  const t = useTranslations("Why");

  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }} 
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          {t("paragraph")}
        </motion.p>
        {/* car image */}
        <motion.div 
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"/images/why/car.svg"} width={1060} height={420} alt="" />
        </motion.div>
        {/* grid items */}
        <motion.div 
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">{t("title-reason-1")}</h3>
            <p className="hidden xl:flex">
              {t("paragraph-reason-1")}
            </p>            
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">{t("title-reason-2")}</h3>
            <p className="hidden xl:flex">
              {t("paragraph-reason-2")}
            </p>            
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">{t("title-reason-3")}</h3>
            <p className="hidden xl:flex">
              {t("paragraph-reason-3")}
            </p>            
          </div>
        </motion.div>        
      </div>
    </section>
  );
} 
 