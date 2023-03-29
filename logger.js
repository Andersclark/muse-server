import {LOGGING_ENABLED} from "./config.js";

export default function log(service, action, data) {
  if(!LOGGING_ENABLED){ return }
  console.log(`[${service}] - ${action}:`, data)
}
