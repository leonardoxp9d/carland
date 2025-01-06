'use client';

import { useContext, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { Link } from "react-scroll";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

import SearchMobile from "./SearchMobile";
import LanguageToggle from "./LanguageToggle";
import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const t = useTranslations("Header");
  const menuLinks = ["home", "cars", "about", "why", "testimonial", "contact"];

  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isDesktopMode = useMediaQuery({ query: '(min-width: 1300px)' });

  // handleScroll eventos
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 40);
      setSearchActive(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSearchActive]);

  // fecha o menu hamburguer em modo desktopMode 
  useEffect(() => {
    if (isDesktopMode) setIsNavOpen(false);
  }, [isDesktopMode]);

  return (
    <header className={`
      fixed w-full max-w-[1920px] py-2 mx-auto z-20 transition-all duration-300
      ${isHeaderScrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}
      ${isNavOpen ? 'bg-white duration-0' : ''}
    `}>
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">

          <Link to="home" smooth={isDesktopMode} spy={true} className="cursor-pointer">
            <Image src="/icons/logo.svg" width={194} height={64} alt={t("logo")} />
          </Link>

          {/* menu hamburguer */}
          <div onClick={() => setIsNavOpen(!isNavOpen)} className="xl:hidden cursor-pointer">
            {isNavOpen ? <BiX className="text-4xl" /> : <BiMenuAltRight className="text-4xl" />}
          </div>
        </div>

        {/* navegação do menu */}
        <nav className={`
          flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold 
          xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent 
          text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case
          transition-all duration-150 mr-20 items-center 
          ${isNavOpen ? 'max-h-max py-8 px-4' : 'max-h-0 xl:max-h-max'}
        `}>
          {menuLinks.map((item) => (
            <Link
              key={item}
              to={item}
              className="cursor-pointer"
              activeClass="active"
              smooth={isDesktopMode}
              spy={true}
            >
              {t(item)}
            </Link>
          ))}

          <LanguageToggle className={`${isNavOpen ? "block" : "hidden"} xl:block xl:opacity-100`} />

          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            smooth={isDesktopMode}
            spy={true}
          >
            {t("button-see-cars")}
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
