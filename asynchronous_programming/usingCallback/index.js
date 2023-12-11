const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  alert("Event started");
  log.textContent = "";
  const xhr = new XMLHttpRequest();

  //callback function, function as parameter.
  //when load is ended call a function at appropriate time
  //this says ok take this initial value here "loadend" then using this
  //compute some value and then give that result to function in second argument
  //this is  called a callback,
  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent} Finished receiving with status code ${xhr.status}`;
  });

  xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");

  xhr.send();

  log.textContent = `${log.textContent} Started Http request`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
