//Problem 3 : Palindrome Check

const palindrome = (word) => {
  let array = word.split("");
  array.reverse();
  let reversedWord = array.join("");
  return reversedWord == word;
};

console.log(palindrome("racecar"));
console.log(palindrome("car"));