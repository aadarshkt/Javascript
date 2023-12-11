const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(fetchPromise);

fetchPromise
  .then((response) => {
    //response.json() is also a promise
    return response.json();
  })
  .then((data) => console.log(data[0].name))
  .catch((err) => console.error(err));

//this runs immediately thus we get non-blocking long running task

console.log("Started request");
