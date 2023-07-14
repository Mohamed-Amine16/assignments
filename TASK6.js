//Problem 6: Delayed Greeting

const delayedGreeting = (name) => {
  let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => resolve(),2000);
  });
  myPromise.then(() => console.log(`Hello, ${name}`));
};
delayedGreeting("Mohamed Amine")

