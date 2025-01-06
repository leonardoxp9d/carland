"use client";

import React, { useState, useEffect } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { IoLanguage } from "react-icons/io5";

import {usePathname, useRouter } from "../navigation";
import { useTranslations } from "next-intl";

export default function LanguageToggle({ className = "" }) {
  const [language, setLanguage] = useState();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageToggle");

  const languages = [
    { label: t("english"), code: "en" },
    { label: t("portuguese"), code: "pt" },
  ];

  useEffect(() => {
    if (language) {
      router.push(pathname, { locale: language });
    }
  }, [language, pathname, router]);

  return (
    <Menu as="div" className={`absolute right-[100px] top-5 xl:static z-50 ${className}`}>
      {({ open }) => (
        <>
          {/* btn */}
          <Menu.Button 
            className={`btn-language
              ${
                open 
                ? "bg-transparent text-primary" 
                : ""
              }
            `}
          >
            <IoLanguage
              className={`h-[1.5rem] w-[1.5rem]`}
            />
          </Menu.Button>

          {/* items */}
          <Menu.Items className="
            absolute bg-white max-w-[332px] rounded-[10px] w-40 py-6 mt-2 -translate-x-1/3 shadow-2xl
          ">
            {languages.map((language, index) => (
              <Menu.Item key={index}>
                <div
                  onClick={() => setLanguage(language.code)}
                  className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-200 text-[13px] uppercase"
                >
                  {language.label}
                </div>
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

