export default function range(start = 0 , end = 0, step = 1) {
  let length = Math.max(Math.ceil((end - start) / step), 0);
  return [for (i of Array(length).keys()) i * step];
}
