import { errorStream,payloadStream,Log_level } from "./utils";
import * as util from "util";

export function streamLogs(level: Log_level, error: any, ...message: object[]) {
  const obj = {
    functionName: null,
    fileName: null,
    lineNumber: null,
    columnNumber: null,
    message: message,
    errorMessage: null,
    errorStack: null,
  };

  switch (level) {
    case "info":
    case "warn":
      if (payloadStream === "true") {
        console[level](util.inspect(obj, { depth: null }));
      }
      break;
    case "error":
      if (errorStream !== "false") {
        Object.assign(obj, { errorMessage: error.message, errorStack: error });
        console.error(obj);
      }
      break;
    default:
      break;
  }
}