function ignore(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === ",") {
      continue;
    }
    newString += str[i];
  }
  return newString.toLowerCase();
}

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

function isPalindrome(str) {
  let sanitizedString = ignore(str);
  return sanitizedString === reverseString(sanitizedString);
}

module.exports = isPalindrome;
