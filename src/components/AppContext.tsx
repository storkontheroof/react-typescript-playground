import React, { createContext, useContext, useState, Dispatch } from "react";

interface ISelectedAccount {
  pos: string;
  accountItem: any;
}

interface IAppContextProps {
  selectedAccounts: ISelectedAccount[];
  setSelectedAccounts: Dispatch<ISelectedAccount[]>;
}

const AppContext = createContext<IAppContextProps>(undefined);

const AppContextProvider = ({ children }) => {
  const [selectedAccounts, setSelectedAccounts] = useState<ISelectedAccount[]>(
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
