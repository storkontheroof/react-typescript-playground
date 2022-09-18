import React, {useRef, useEffect} from 'react'

export const Dummy = () => {
  const ref = useRef("ABC");

  useEffect(() => {
    console.log({ ref });
    ref.current = "DEF";
  }, []);

  return (
    <div>
      <h3>Component A</h3>
      <p>{ref.current}</p>
    </div>
  );
}
