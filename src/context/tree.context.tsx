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

const TreeContext = createContext<ContextProps | undefined>(undefined);

const TreeContextProvider = ({
  children,
}: PropsWithChildren<ContextProviderProps>) => {
  const [state, setState] = useState(initialState);

  const value = { state, setState };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
};

const useTreeContext = (): ContextProps => {
  const context = useContext(TreeContext);
  if (context === undefined) {
    throw new Error("useAccount must be used within a TreeContextProvider");
  }
  return context;
};

export { TreeContextProvider, useTreeContext };
