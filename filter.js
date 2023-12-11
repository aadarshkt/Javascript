const arr = [1, 2, 3, 4];

function findOdd(x) {
  return x % 2 != 0;
}

const output = arr.filter(findOdd);

const secondOutput = arr.filter((x) => x % 2 == 0);

console.log(output);
console.log(secondOutput);
