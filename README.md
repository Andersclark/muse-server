# Muse server

A Node.JS-based web server for streaming data from a client and onwards to... ANYTHING!

## Getting started

*NOTE: This server was built to serve [muse-client](https://github.com/Andersclark/muse-client)*

1. Clone the repository
2. `npm install`
3. `npm run dev` or `npm run serve` to run the server. `dev` will watch for file changes


## The data

The headset has four electrodes which output values between -1000 and 1000, though the average values seem to differ between the electrodes on the frontal lobe and the ones behind the ears.

### Some insights

The values below where calculated based on 100 000+ recorded samples recorded during different levels of activity and sensory input.

```
[
  {
    "electrode":0,
    "average":-23.29080755060369,
    "min":-1000,
    "max":976.07421875},
  {
    "electrode":1,
    "average":-613.0151741127822,
    "min":-1000,
    "max":999.51171875
  },
  {
    "electrode":2,
    "average":-565.8390149274334,
    "min":-1000,
    "max":999.51171875},
  {
    "electrode":3,
    "average":-26.688108080307867,
    "min":-1000,
    "max":385.25390625
  }
]

```

