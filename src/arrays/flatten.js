export default function flatten(arr) {
  return Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
}
