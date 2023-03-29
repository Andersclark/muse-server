import { Server } from "socket.io";
import { createServer } from "node:http";
import {LOGGING_ENABLED, OUTPUT_INTERVAL_MS, MOCK_CLIENT} from "./config.js";
import {parseMuseData} from "./parsers.js";
import {sendOSC} from "./osc.js";
import {sendUDP} from "./udp.js";
import saveToFile from "./file.js";
import MockClient from "./mockClient.js";
import log from "./logger.js";

let latest = Date.now();

async function handleMuseMessage(val) {
  if(Date.now() - latest > OUTPUT_INTERVAL_MS) {
    const parsed = parseMuseData(val)
    if (parsed) {
      sendOSC(parsed)
    }
    latest = Date.now()
  }
}

if (MOCK_CLIENT) {
  const mockClient = new MockClient(handleMuseMessage, 0)
  await mockClient.loadData()
  mockClient.start()
}
else {
  const httpServer = createServer();
  const socketServer = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  socketServer.on('connection', (socket) => {
    log("WEBSOCKET", "connection established");
    socket.on("muse", handleMuseMessage)
  })
  httpServer.listen(3000);

}


