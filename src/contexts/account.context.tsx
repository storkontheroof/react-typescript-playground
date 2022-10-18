// Node modules
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  PropsWithChildren,
} from "react";

interface Account {
  id: number;
  name: string;
}

interface ContextState {
  selectedAccounts: Account[];
}

interface ContextProps {
  state: ContextState;
  setState: Dispatch<ContextState>;
}

interface ContextProviderProps {}

export const initialState: ContextState = {
  selectedAccounts: [],
};

const AccountContext = createContext<ContextProps | undefined>(undefined);

const AccountContextProvider = ({
  children,
}: PropsWithChildren<ContextProviderProps>) => {
  const [state, setState] = useState(initialState);

  const value = { state, setState };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

const useAccountContext = (): ContextProps => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAccount must be used within a AccountContextProvider");
  }
  return context;
};

export { AccountContextProvider, useAccountContext };
export type { Account };
