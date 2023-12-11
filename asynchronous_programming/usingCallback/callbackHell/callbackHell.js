//instead taking in callbacks return promise
//use that promise object to get result and pass it another function.
//see promise version of this code in promise folder.
function getRes1(init, callback) {
  const result = init + 1;
  callback(result);
}

///a function takes in some functions, calculates a value and gives results to those function.
//that's it

function getRes2(init, callback) {
  const result = init + 1;
  callback(result);
}

function getRes3(init, callback) {
  const result = init + 1;
  callback(result);
}

function doSomething() {
  getRes1(0, (result1) => {
    getRes2(result1, (result2) => {
      getRes3(result2, (result3) => {
        console.log(`${result3}`);
      });
    });
  });
}

doSomething();
