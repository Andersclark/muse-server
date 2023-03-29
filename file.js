import fs from "fs";
import log from "./logger.js";

export default async function saveToFile(data){
  const str = JSON.stringify(data);
  await fs.appendFile(`logs/muse_${data.electrode}.json`, str, () => {
    log("FILE-WRITER", "file saved")
  });
}
