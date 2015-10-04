export default function concat(...arrs) {
  return [].concat.apply([], [...arrs]);
}
