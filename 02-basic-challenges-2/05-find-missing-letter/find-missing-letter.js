function findMissingLetter(strArr) {
  let testString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const startingIndexInTestString = testString.indexOf(strArr[0]);

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== testString[startingIndexInTestString + i]) {
      return testString[startingIndexInTestString + i];
    }
  }

  return "";
}

module.exports = findMissingLetter;
