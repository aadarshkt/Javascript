const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, val) => acc + val);

const mx = arr.reduce((acc, val) => Math.max(acc, val));
const mn = arr.reduce((acc, val) => Math.min(acc, val));

console.log(sum);
console.log(mx);
console.log(mn);
