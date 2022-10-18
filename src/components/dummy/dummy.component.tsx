import React, { useRef, useEffect } from "react";
import { useAccountContext } from "@contexts/account.context";

export const Dummy = () => {
  const id = useRef(0);
  const { state } = useAccountContext();

  useEffect(() => {
    id.current = id.current + 1;
  }, [state]);

  return (
    <>
      <p>ID: {id.current}</p>
    </>
  );
};
