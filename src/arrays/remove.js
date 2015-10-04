export default function remove(arr, ...val) {
  if (val.length > 1) {
    val.forEach((value, i) => { if (arr.indexOf(value)!==-1) arr.splice(arr.indexOf(value), 1)});
    return arr;
  } else {
    return arr.filter((n, i) => n !== val[0]);
  }
}
