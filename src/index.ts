import type { AnimateableKeyframe } from '@baleada/logic'

export const linear: AnimateableKeyframe['timing'] = [
  0   , 0   ,
  1   , 1   ,
]

// Material Design and Tailwind
export const materialStandard: AnimateableKeyframe['timing'] = [
  0.4 , 0   ,
  0.2 , 1   ,
]
export const materialDecelerated: AnimateableKeyframe['timing'] = [
  0   , 0   ,
  0.2 , 1   ,
]
export const materialAccelerated: AnimateableKeyframe['timing'] = [
  0.4 , 0   ,
  1   , 1   ,
]

// Lea Verou
export const verouEase: AnimateableKeyframe['timing'] = [
  0.25, 0.1 ,
  0.25, 1   ,
]
export const verouEaseIn: AnimateableKeyframe['timing'] = [
  0.42, 0   ,
  1   , 1   ,
]
export const verouEaseOut: AnimateableKeyframe['timing'] = [
  0   , 0   ,
  0.58, 1   ,
]
export const verouEaseInOut: AnimateableKeyframe['timing'] = [
  0.42, 0   ,
  0.58, 1   ,
]

// easings.net
export const easingsNetInSine: AnimateableKeyframe['timing'] = [
  0.12, 0   ,
  0.39, 0   ,
]
export const easingsNetOutSine: AnimateableKeyframe['timing'] = [
  0.61, 1   ,
  0.88, 1   ,
]
export const easingsNetInOutSine: AnimateableKeyframe['timing'] = [
  0.37, 0   ,
  0.63, 1   ,
]
export const easingsNetInQuad: AnimateableKeyframe['timing'] = [
  0.11, 0   ,
  0.5 , 0   ,
]
export const easingsNetOutQuad: AnimateableKeyframe['timing'] = [
  0.5 , 1   ,
  0.89, 1   ,
]
export const easingsNetInOutQuad: AnimateableKeyframe['timing'] = [
  0.45, 0   ,
  0.55, 1   ,
]
export const easingsNetInCubic: AnimateableKeyframe['timing'] = [
  0.32, 0   ,
  0.67, 0   ,
]
export const easingsNetOutCubic: AnimateableKeyframe['timing'] = [
  0.33, 1   ,
  0.68, 1   ,
]
export const easingsNetInOutCubic: AnimateableKeyframe['timing'] = [
  0.65, 0   ,
  0.35, 1   ,
]
export const easingsNetInQuart: AnimateableKeyframe['timing'] = [
  0.5 , 0   ,
  0.75, 0   ,
]
export const easingsNetInQuint: AnimateableKeyframe['timing'] = [
  0.64, 0   ,
  0.78, 0   ,
]
export const easingsNetOutQuint: AnimateableKeyframe['timing'] = [
  0.22, 1   ,
  0.36, 1   ,
]
export const easingsNetInOutQuint: AnimateableKeyframe['timing'] = [
  0.83, 0   ,
  0.17, 1   ,
]
export const easingsNetInExpo: AnimateableKeyframe['timing'] = [
  0.7 , 0   ,
  0.84, 0   ,
]
export const easingsNetOutExpo: AnimateableKeyframe['timing'] = [
  0.16, 1   ,
  0.3 , 1   ,
]
export const easingsNetInOutExpo: AnimateableKeyframe['timing'] = [
  0.87, 0   ,
  0.13, 1   ,
]
export const easingsNetInCirc: AnimateableKeyframe['timing'] = [
  0.55, 0   ,
  1   , 0.45,
]
export const easingsNetOutCirc: AnimateableKeyframe['timing'] = [
  0   , 0.55,
  0.45, 1   ,
]
export const easingsNetInOutCirc: AnimateableKeyframe['timing'] = [
  0.85, 0   ,
  0.15, 1   ,
]
export const easingsNetInBack: AnimateableKeyframe['timing'] = [
  0.36, 0   ,
  0.66,-0.56,
]
export const easingsNetOutBack: AnimateableKeyframe['timing'] = [
  0.34, 1.56,
  0.64, 1   ,
]
export const easingsNetInOutBack: AnimateableKeyframe['timing'] = [
  0.68,-0.6 ,
  0.32, 1.6 ,
]
