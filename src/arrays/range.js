export default function range(start = 0 , end = start || 0, step = 1) {
  if (end == start || 0) start = 0;
  let length = Math.max(Math.ceil((end - start) / step), 0);
  return [for (i of Array(length).keys()) i * step];
}
