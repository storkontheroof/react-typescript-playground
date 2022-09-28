import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  PropsWithChildren,
} from "react";

type SearchResult = {
  pos: string;
  accountItem: any;
};

type SearchContextProps = {
  searchResults: SearchResult[];
  setSearchResults: Dispatch<SearchResult[]>;
};

type SearchContextProviderProps = PropsWithChildren<{}>;

const defaultProps: SearchContextProps = {
  searchResults: [],
  setSearchResults: () => null,
};

const SearchContext = createContext<SearchContextProps>(defaultProps);

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

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
