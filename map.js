const arr = [1, 2, 3, 4, 5];

function binary(x) {
  var str = "";
  while (x > 0) {
    if (x % 2 == 0) {
      str += "0";
    } else str += "1";
    x = Math.floor(x / 2);
  }
  return str.split("").reverse().join("");
}

const output = arr.map(binary);

console.log(arr);
console.log(output);
