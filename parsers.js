export function parseMuseData(raw) {
  return raw;
}

function getAverage(values){
  const sum = values.reduce((acc, val)=> val+acc , 0)
  return sum/values.length
}

const museToMidiMultiplier = 127/2000
const museToPositiveOffset = 1000

const museElectrodeMap = {
  TP9: "",
  AF7: "",
  AF8: "",
  TP10: "",
}

export function museToMidi(museValue) {
  return (museValue + museToPositiveOffset) * museToMidiMultiplier;
}

