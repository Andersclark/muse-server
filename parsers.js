const history = []
let lastPrint = Date.now();

export function parseMuseData(raw) {
  // if (raw.electrode == 0) {
  //   const average = getAverage(raw.samples)
  //   history.push(average)
  //   // if (Date.now() - lastPrint > 1000) {
  //   //   console.log("MIN:", Math.min(...history))
  //   //   console.log("MAX:", Math.max(...history))
  //   //   lastPrint = Date.now();
  //   // }
  //   return `${raw.electrode} ${museToMidi(average)}`
  // }
  return null;
}

function getAverage(values){
  const sum = values.reduce((acc, val)=> val+acc , 0)
  return sum/values.length
}

//MIDI is 0-127,
const museToMidiMultiplier = 127/400
const museToPositiveOffset = 200

const museElectrodeMap = {
  TP9: "",
  AF7: "",
  AF8: "",
  TP10: "",
}

export function museToMidi(museValue) {
  return museValue.toFixed(0);
}

