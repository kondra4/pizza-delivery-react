import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <SearchContext.Provider value={{ searchTitle, setSearchTitle }}>
      {children}
    </SearchContext.Provider>
  );
};
