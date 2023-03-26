import { Server } from "socket.io";
import { createServer } from "node:http";
import saveToFile from "./file.js";
import {LOGGING_ENABLED} from "./config.js";

const httpServer = createServer();

const socketServer = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

socketServer.on('connection', (socket) => {
  LOGGING_ENABLED && console.log('[WEBSOCKET] connection to client established');
  socket.on("muse", handleMuseMessage)
  })

let latest = Date.now();

async function handleMuseMessage(val) {
  // if (Date.now() - latest > OUTPUT_INTERVAL_MS ) {
  //   const parsed = parseMuseData(val)
  //   if (parsed) {
  //     sendOSC(parsed)
  //     sendUDP(parsed)
  //   }
  //   latest = Date.now()
  // }
  await saveToFile(val)
}


httpServer.listen(3000);
