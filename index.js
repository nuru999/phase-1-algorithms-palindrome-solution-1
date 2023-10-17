function isPalindrome(word) {
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
