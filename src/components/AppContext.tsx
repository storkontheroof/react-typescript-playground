import React, { createContext, useContext, useState, Dispatch, PropsWithChildren } from "react";

type SelectedAccount = {
  pos: string;
  accountItem: any;
}

type AppContextProps = {
  selectedAccounts: SelectedAccount[];
  setSelectedAccounts: Dispatch<SelectedAccount[]>;
}

type AppContextProviderProps = PropsWithChildren<{}>

const defaultProps:AppContextProps = {
    selectedAccounts: [],
    setSelectedAccounts: () => null
}
const AppContext = createContext<AppContextProps>(defaultProps);

const AppContextProvider = ({ children }:AppContextProviderProps) => {
  const [selectedAccounts, setSelectedAccounts] = useState<SelectedAccount[]>(
    []
  );

  const value = { selectedAccounts, setSelectedAccounts };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error("This should be wrapper in an AppContextProvider ");
    return;
  }

  return context;
};

export { AppContextProvider, useAppContext };
