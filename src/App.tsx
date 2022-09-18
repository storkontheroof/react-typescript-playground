import { useEffect, useRef } from "react";

import "./styles.css";

function ComponentA({
  permissions = { enabled: true },
  isMultiSelect = false
}) {
  // Used to remember the parent branch key (id) after api request completes
  const ref = useRef("ABC");

  // const hasChanged = useCallback(() => {}, []);

  // initial load (or when permissions or multiselect are updated)
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

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ComponentA permissions={{ enabled: false }} isMultiSelect={false} />
    </div>
  );
}
