//! MAKE A COPY OF problems-start. js as problems.js before completing tasks.

// TODO: write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
//  eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(who = "World") {
  return `Hello ${who}!`;
}

// TODO: write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

// TODO: write a function to convert an age into days
// exampe: yearsToDays(65) ➞ 23725
function yearsToDays(age) {
  return age * 365;
}

// TODO: write a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 5 then your function should return 15 because 1 + 2 + 3 + 4 + 5 = 15
function addUpNumber(number) {
  let total = 0;
  for (let i = 1; i < number + 1; i++) {
    total += i;
  }
  return total;
}

// TODO: write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return parseFloat(String(number).split("").reverse().join(""));
}

// TODO: write a function to check if a word or phrase is a palindrome returning a boolean
//  eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const strippedString = string.split("").filter((letter) => letter != " ");
  return strippedString.join() === strippedString.reverse().join();
}

// TODO: write a function that returns the letters of a word or phrase in alphabetical order case insensitive
//  eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const wordArray = string.split("").filter((letter) => letter != " ");
  const wordArrayLower = wordArray.map((letter) => letter.toLowerCase());
  return wordArrayLower.sort().join("");
}

// TODO: write a function that capitalizes the first letter of each word
//  eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  const words = string.split(" ");
  const upperCaseWords = words.map(
    (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()
  );
  return upperCaseWords.join(" ");
}

// TODO: write a function that frames a string in asterisks (*)
//                              ***************
//  eg: frame('Hello Kitty') => * Hello Kitty *
//                              ***************
function frame(string) {
  const mainLine = "* " + string + " *";
  return (
    "*".repeat(mainLine.length) +
    "\n" +
    mainLine +
    "\n" +
    "*".repeat(mainLine.length)
  );
}

//! UNCOMMENT THE EXPORTS WHEN YOU WOULD LIKE TO TEST THEM

module.exports = {
  hello,
  areaOfCircle,
  yearsToDays,
  addUpNumber,
  numberReverse,
  palindromeCheck,
  orderStringAlphabetically,
  titleCase,
  frame,
};
