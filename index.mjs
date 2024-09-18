import { log } from "./log.mjs";

export const handler = async (event) => {  
  console.log("logs: " + JSON.stringify(event));
  

  return {
    statusCode: 200,
    body: JSON.stringify(event),
    Headers: {
      "Content-Type": "application/json"
    },
  };
};
