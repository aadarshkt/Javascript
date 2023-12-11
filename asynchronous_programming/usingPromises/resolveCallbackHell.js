function getRes1(init) {
  const result = init + 1;
  return new Promise((resolve, reject) => {
    resolve(result);
    reject("Didn't get any result");
  });
}

function getRes2(init) {
  const result = init + 1;
  return new Promise((resolve, reject) => {
    resolve(result);
    reject("Didn't get any result");
  });
}

function getRes3(init) {
  const result = init + 1;
  return new Promise((resolve, reject) => {
    resolve(result);
    reject("Didn't get any result");
  });
}

//then is called when promise object resolves.

function doSomething() {
  getRes1(0)
    .then((result) => {
      return getRes2(result);
    })
    .then((result2) => {
      return getRes3(result2);
    })
    .then((result3) => console.log(result3))
    .catch((err) => console.error(err));
}

doSomething();
