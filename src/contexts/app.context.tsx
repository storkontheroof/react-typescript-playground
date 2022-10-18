// Node modules
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  PropsWithChildren,
} from "react";

interface ContextState {
  name: string[];
  keys: string[];
  selectedItems: number[];
}

interface ContextProps {
  state: ContextState;
  setState: Dispatch<ContextState>;
}

interface ContextProviderProps {}

export const initialState: ContextState = {
  name: [],
  keys: [],
  selectedItems: [],
};

const AppContext = createContext<ContextProps | undefined>(undefined);

const AppContextProvider = ({
  children,
}: PropsWithChildren<ContextProviderProps>) => {
  const [state, setState] = useState(initialState);

  const value = { state, setState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = (): ContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAccount must be used within a AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
