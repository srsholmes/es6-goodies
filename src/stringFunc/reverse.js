export default function reverse(str) {
  return !str || str.length < 2 ? str : str.split('').reverse().join('');
}
