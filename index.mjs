import { log } from "./log.mjs";

export const handler = async (event) => {  
  log("Hello from handler " + JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
