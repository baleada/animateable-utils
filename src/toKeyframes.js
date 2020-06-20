export default function toKeyframes (cssSpringKeyframesObject) {
  return Object.keys(cssSpringKeyframesObject)
    .map(key => ({
      progress: Number(key.replace(/%/, '')) / 100,
      data: cssSpringKeyframesObject[key],
    }))
}