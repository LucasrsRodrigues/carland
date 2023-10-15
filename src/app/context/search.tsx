"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface ISearchContextProviderProps {
  children: ReactNode;
}

interface ISearchContextProps {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchContext = createContext({} as ISearchContextProps);

// provider
export const SearchContextProvider = ({
  children,
}: ISearchContextProviderProps) => {
  const [searchActive, setSearchActive] = useState(false);


  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
