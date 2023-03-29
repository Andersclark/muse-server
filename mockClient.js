import {readFile} from "fs/promises";

const BASE_PATH = "./mocks/datasets"

const logPaths = [
  BASE_PATH + '/AF7.json',
  BASE_PATH + '/AF8.json',
  BASE_PATH + '/TP9.json',
  BASE_PATH + '/TP10.json',
]

export default class MockClient {
  constructor(callback, interval = 50) {
    this.callback = callback;
    this.interval = interval;
    this.electrodeIndex = 0;
    this.logIndex = 0;
  }
  next(){
    const nextVal =  this.data[this.electrodeIndex][this.logIndex]
    if (this.electrodeIndex < 3){
      this.electrodeIndex++
    } else {
      this.electrodeIndex = 0;
      if (this.logIndex < this.logLength) {
        this.logIndex++
      } else {
        this.logIndex = 0;
        this.electrodeIndex = 0;
      }
    }
    return nextVal;
  }

  async loadData() {
    const electrodeLogs = await Promise.all(logPaths.map(async (path) => JSON.parse(await readFile(path, "utf-8"))))
    this.data = electrodeLogs
    this.logLength = Math.min(...electrodeLogs.map(electrodeLog => electrodeLog.length))
  }
  async send(data){
    await this.callback(data)
  }
  start(){
    setInterval(async ()=> {
      const data = this.next()
      await this.send(data)
    }, this.interval )
  }
}
