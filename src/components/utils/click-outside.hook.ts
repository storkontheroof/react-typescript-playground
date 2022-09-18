import { useEffect } from "react";

export const useClickOutside = (ref: any, callback: () => any) => {
  const handleClick = (e: MouseEvent) => {
    const isClickOutside = ref.current && !ref.current.contains(e.target);
    if (isClickOutside) {
      console.log("--- is click OUTside ---");
      callback();
    } else {
      console.log("--- is click INside ---");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
