module.exports = {}

exports.toKeyframes = function (cssSpringKeyframesObject) {
  return Object.keys(cssSpringKeyframesObject)
    .map(key => ({
      progress: Number(key.replace(/%/, '')) / 100,
      data: cssSpringKeyframesObject[key],
    }))
}

exports.linear = [
  0   , 0   ,
  1   , 1   ,
]

// Material Design and Tailwind
exports.materialStandard = [
  0.4 , 0   ,
  0.2 , 1   ,
]
exports.materialDecelerated = [
  0   , 0   ,
  0.2 , 1   ,
]
exports.materialAccelerated = [
  0.4 , 0   ,
  1   , 1   ,
]

// Lea Verou of https://cubic-bezier.com/ fame
exports.verouEase = [
  0.25, 0.1 ,
  0.25, 1   ,
]
exports.verouEaseIn = [
  0.42, 0   ,
  1   , 1   ,
]
exports.verouEaseOut = [
  0   , 0   ,
  0.58, 1   ,
]
exports.verouEaseInOut = [
  0.42, 0   ,
  0.58, 1   ,
]

// easings.net
exports.easingsNetInSine = [
  0.12, 0   ,
  0.39, 0   ,
]
exports.easingsNetOutSine = [
  0.61, 1   ,
  0.88, 1   ,
]
exports.easingsNetInOutSine = [
  0.37, 0   ,
  0.63, 1   ,
]
exports.easingsNetInQuad = [
  0.11, 0   ,
  0.5 , 0   ,
]
exports.easingsNetOutQuad = [
  0.5 , 1   ,
  0.89, 1   ,
]
exports.easingsNetInOutQuad = [
  0.45, 0   ,
  0.55, 1   ,
]
exports.easingsNetInCubic = [
  0.32, 0   ,
  0.67, 0   ,
]
exports.easingsNetOutCubic = [
  0.33, 1   ,
  0.68, 1   ,
]
exports.easingsNetInOutCubic = [
  0.65, 0   ,
  0.35, 1   ,
]
exports.easingsNetInQuart = [
  0.5 , 0   ,
  0.75, 0   ,
]
exports.easingsNetInQuint = [
  0.64, 0   ,
  0.78, 0   ,
]
exports.easingsNetOutQuint = [
  0.22, 1   ,
  0.36, 1   ,
]
exports.easingsNetInOutQuint = [
  0.83, 0   ,
  0.17, 1   ,
]
exports.easingsNetInExpo = [
  0.7 , 0   ,
  0.84, 0   ,
]
exports.easingsNetOutExpo = [
  0.16, 1   ,
  0.3 , 1   ,
]
exports.easingsNetInOutExpo = [
  0.87, 0   ,
  0.13, 1   ,
]
exports.easingsNetInCirc = [
  0.55, 0   ,
  1   , 0.45,
]
exports.easingsNetOutCirc = [
  0   , 0.55,
  0.45, 1   ,
]
exports.easingsNetInOutCirc = [
  0.85, 0   ,
  0.15, 1   ,
]
exports.easingsNetInBack = [
  0.36, 0   ,
  0.66,-0.56,
]
exports.easingsNetOutBack = [
  0.34, 1.56,
  0.64, 1   ,
]
exports.easingsNetInOutBack = [
  0.68,-0.6 ,
  0.32, 1.6 ,
]
