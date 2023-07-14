//Problem 2 : tasks

let myPromise1 = new Promise((resolve, reject) => {
  console.log("Task 1: Delayed task 1");
  setTimeout(() => {
    resolve();
    console.log("Task 2: Delayed task 2");
  }, 2000);
});
myPromise1.then(() => {
  setTimeout(() => console.log("Task 3: Delayed task 3"), 3000);
});

