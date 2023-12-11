function madadGarDost(init, callback) {
  const result = init + 1;
  callback(result);
}

function Mai(result) {
  console.log(`Bhai thank you result calculate karne kye liye, result mil gaya ${result}`);
}

//mera madarGarDost kam karna start kiya
madadGarDost(100, Mai);

//more formal

function parent(init, callback) {
  const result = init + 10; //could be a HTTP request//could be long running task
  //when result is available
  callback(result);
}

function child(result) {
  console.log(`${result}`);
}

parent(100, child);

//setTimeout example.

function parent1(time, callback) {
  setTimeout(() => {
    //when time is complete given the value;
    callback(1729);
  }, time);
}

function child1(result) {
  console.log(`The new result is ${result}`);
}

parent1(2000, child1);
console.log("This is run immediately as callback above is running seperately");
