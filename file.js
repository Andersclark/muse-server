import fs from "fs";
import {LOGGING_ENABLED} from "./config.js";

export default async function saveToFile(data){
  const str = JSON.stringify(data);
  await fs.appendFile(`logs/muse_${data.electrode}.json`, str, () => {
    LOGGING_ENABLED && console.log("[FILE-WRITER]: file saved")
  });
}
