import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  PropsWithChildren,
} from "react";

type SelectedAccount = {
  pos: string;
  accountItem: any;
};

type AccountContextProps = {
  selectedAccounts: SelectedAccount[];
  setSelectedAccounts: Dispatch<SelectedAccount[]>;
};

type AccountContextProviderProps = PropsWithChildren<{}>;

const defaultProps: AccountContextProps = {
  selectedAccounts: [],
  setSelectedAccounts: () => null,
};

const AccountContext = createContext<AccountContextProps>(defaultProps);

const AccountContextProvider = ({ children }: AccountContextProviderProps) => {
  const [selectedAccounts, setSelectedAccounts] = useState<SelectedAccount[]>(
    []
  );

  const value = { selectedAccounts, setSelectedAccounts };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) {
    console.error("This should be wrapper in an AccountContextProvider ");
    return;
  }

  return context;
};

export { AccountContextProvider, useAccountContext };
