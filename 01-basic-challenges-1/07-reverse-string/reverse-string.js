// function reverseString(str) {
//   const storeArr = [];
//   let index = 0;
//   for (let i = str.length - 1; i >= 0; i--) {
//     storeArr[index] = str[i];
//     ++index;
//   }

//   return storeArr.join("");
// }
function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

module.exports = reverseString;
