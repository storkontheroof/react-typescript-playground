// Node modules
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  PropsWithChildren,
} from "react";

interface ContextState {
  searchTerm: string;
  searchResults: string[];
}

interface ContextProps {
  state: ContextState;
  setState: Dispatch<ContextState>;
}

interface ContextProviderProps {}

export const initialState: ContextState = {
  searchTerm: "",
  searchResults: [],
};

const SearchContext = createContext<ContextProps | undefined>(undefined);

const SearchContextProvider = ({
  children,
}: PropsWithChildren<ContextProviderProps>) => {
  const [state, setState] = useState(initialState);

  const value = { state, setState };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearchContext = (): ContextProps => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};

export { SearchContextProvider, useSearchContext };
