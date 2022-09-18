import { click } from "@testing-library/user-event/dist/click";
import { EventHandler, useCallback, useEffect, useState } from "react";

import * as Utils from "./promises.utils";

export const PromisesExample = () => {
  const [url, setUrl] = useState("http://localhost:3000/data/data.json");

  const options = [
    { label: "randomResolveReject", value: "1" },
    { label: "makeApiRequest 1", value: "2" },
    { label: "makeApiRequest 2", value: "3" },
    { label: "makeApiRequest 3", value: "4" },
  ];

  const makeApiRequest = useCallback(async (url: string) => {
    const response = await Utils.makeApiRequest(url);

    return response;
  }, []);

  useEffect(() => {
    console.log("in useEffect");

    Utils.randomResolveReject()
      .then((response) => {
        console.log({ response1: response });
      })
      .catch((err) => {
        console.log({ error1: err });
      });

    Utils.randomResolveReject2()
      .then((response) => {
        console.log({ response2: response });
      })
      .catch((err) => {
        console.log({ error2: err });
      });
  }, []);

  const clickHandler = (option: string) => {
    switch (option) {
      case "4":
        break;

      case "3":
        Utils.makeApiRequest(url)
          .then((response) => {
            console.log({ response });
          })
          .catch((err) => {
            console.log({ err });
          });
        break;

      case "2":
        const response = makeApiRequest(url);
        console.log({ response });
        break;

      default:
        Utils.randomResolveReject()
          .then((response) => {
            console.log({ response });
          })
          .catch((err) => {
            console.log({ err });
          });
        break;
    }
  };

  return (
    <div>
      <h2>Promises examples</h2>

      <h3>Url</h3>
      <input
        type="text"
        style={{ width: "300px" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br />
      <br />

      <h3>Action</h3>
      {options.map((option) => (
        <div style={{ marginBottom: "20px" }} key={option.value}>
          <button onClick={(e) => clickHandler(option.value)}>
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};
