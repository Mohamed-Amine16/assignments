//Problem 5: Prime numbers

const prime = (n) => {
  let state = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      state = false;
    }
  }
  console.log(state);
};
prime(13);
prime(22);

