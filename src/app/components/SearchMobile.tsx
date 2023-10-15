import { useContext } from "react";
import { DateSelection, HoursSelection, LocationSelection } from ".";
import { SearchContext, useSearchContext } from "../context/search";

export function SearchMobile() {
  const { searchActive } = useSearchContext();

  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button className={`${searchActive
              ? 'btn btn-sm btn-accent xl:w-[164px]'
              : 'btn btn-sm btn-accent xl:w-[184px]'
              }`}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
