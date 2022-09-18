import { resolve } from "path";

type Status = "success" | "error";

interface IApiResponseProps {
  status: Status;
  message: string;
  data: any;
}

export const randomResolveReject = (): Promise<IApiResponseProps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random();
      if (number > 0.5) {
        resolve({
          status: "success",
          message: `The number was ${number}`,
          data: null,
        });
      } else {
        reject({
          status: "error",
          message: `The number was ${number}`,
          data: null,
        });
      }
    }, 1000);
  });
};

export const randomResolveReject2 = (): Promise<IApiResponseProps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random();
      if (number > 0.5) {
        return {
          status: "success",
          message: `The number was ${number}`,
          data: null,
        };
      } else {
        return {
          status: "error",
          message: `The number was ${number}`,
          data: null,
        };
      }
    }, 1000);
  });
};

export const fetchPage = async (url: string): Promise<string> => {
  return fetch(url)
    .then((res) => {
      console.log({ res });
      return res.text();
    })
    .then((data) => {
      console.log({ data });
      return data;
    });
};

export const makeApiRequest = async (
  url: string
): Promise<IApiResponseProps> => {
  const response = await fetch(url);
  const data = await response.json();
  return { status: "success", message: "", data: data };
};

export const someAsyncAction = async (url: string) => {
  const response = await makeApiRequest(url);

  if (!response) {
    console.log("Do some logging here of the error");
  }

  return response;
};
