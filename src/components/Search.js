'use client';

// search context 
import { useContext } from "react";
import { SearchContext } from "../context/search";

// translation
import { useTranslations } from "next-intl";

// components
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HourSelection from "./HourSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);
  const t = useTranslations("Search");

  return (
    <div
      className={`
        ${
          searchActive
          ? 'bg-white rounded-none xl:h-[80px]'
          : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
        } 
        hidden xl:block w-full relative shadow-lg 
      `}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection/>
        <DateSelection/>
        <HourSelection /> 
        {/* btn */}
        <div className="xl:h:full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent xl:w-[184px]"
            }`}
          >
            {t("button-search")}
          </button>
        </div>
      </div>
    </div>
  );
}
