import React, { createContext, useContext, useState, Dispatch } from "react";

interface ISearchResult {
  pos: string;
  accountItem: any;
}

interface ISearchContextProps {
  searchResults: ISearchResult[];
  setSearchResults: Dispatch<ISearchResult[]>;
}

const SearchContext = createContext<ISearchContextProps>(undefined);

const SearchContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  const value = { searchResults, setSearchResults };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    console.error("This should be wrapper in an SearchContextProvider ");
    return;
  }

  return context;
};

export { SearchContextProvider, useSearchContext };
