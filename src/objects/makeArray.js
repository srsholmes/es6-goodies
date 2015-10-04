export default function makeArray(obj) {
  return Object.keys(obj).map(key => obj[key]);
}
