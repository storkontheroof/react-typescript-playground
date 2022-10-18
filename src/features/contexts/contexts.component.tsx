import { PropsWithChildren } from "react";
import styled from "styled-components";

import { AppContextProvider } from "@contexts/app.context";
import {
  AccountContextProvider,
  useAccountContext,
  Account,
} from "@contexts/account.context";
import { TreeContextProvider } from "@contexts/tree.context";
import { SearchContextProvider } from "@contexts/search.context";
import { Dummy } from "@components/dummy/dummy.component";

const Wrapper = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  const FieldSet = styled.fieldset`
    width: 100%;
  `;
  const Legend = styled.legend`
    font-weight: bold;
  `;

  return (
    <FieldSet>
      <Legend>{title}</Legend>
      {children}
    </FieldSet>
  );
};

const AccountSelector = () => {
  return (
    <TreeContextProvider>
      <Wrapper title="TreeContextProvider">
        <Dummy />

        <SearchContextProvider>
          <Wrapper title="SearchContextProvider">
            <Dummy />
            <Wrapper title="Tree">
              <Tree />
            </Wrapper>
          </Wrapper>
        </SearchContextProvider>
      </Wrapper>
    </TreeContextProvider>
  );
};

const Tree = () => {
  const { setState } = useAccountContext();

  const getRandomAccounts = () => {
    const ids: number[] = [];

    while (ids.length < 10) {
      const id = Math.floor(Math.random() * 1000000);
      if (!ids.includes(id)) {
        ids.push(id);
      }
    }

    const accounts: Account[] = ids.map((id) => {
      return { id: id, name: `account ${id}` };
    });

    return { selectedAccounts: accounts };
  };

  return (
    <>
      <Dummy />
      <button onClick={() => setState(getRandomAccounts())}>
        Set selected accounts
      </button>
    </>
  );
};

const SelectedAccounts = () => {
  const { state } = useAccountContext();

  return (
    <>
      <Dummy />
      {state.selectedAccounts.map(({ id, name }) => {
        return <li key={id}>{`${id} - ${name}`}</li>;
      })}
    </>
  );
};

export const ContextsExample = () => {
  return (
    <>
      <h2>Contexts examples</h2>
      <AppContextProvider>
        <Wrapper title="AppContextProvider">
          <AccountContextProvider>
            <Wrapper title="AccountContextProvider">
              <Dummy />

              <Wrapper title="AccountSelector">
                <AccountSelector></AccountSelector>
              </Wrapper>

              <Wrapper title="SelectedAccounts">
                <SelectedAccounts />
              </Wrapper>
            </Wrapper>
          </AccountContextProvider>
        </Wrapper>
      </AppContextProvider>
    </>
  );
};
