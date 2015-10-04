export default function concatAndFlat(...arrs) {
  return [...new Set([].concat.apply([], [...arrs]))];
}
