export default function unique(...arrs) {
  return [...new Set([].concat.apply([], [...arrs]))];
}
