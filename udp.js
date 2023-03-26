import udp from 'node:dgram';
const client = udp.createSocket('udp4');
import {TARGET_ADDRESS, TARGET_PORT} from "./config.js";

client.on('error', function (error) {
  console.log('Error: ' + error);
  client.close();
});

export function sendUDP(value) {
  client.send(value, TARGET_PORT, TARGET_ADDRESS, function (error) {
    if (error) {
      console.error(error);
      client.close();
    } else {
      console.log("[UDP]:", value);
    }
  });
}
