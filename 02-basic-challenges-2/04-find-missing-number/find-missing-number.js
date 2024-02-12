function findMissingNumber(arr) {
  if (!arr) {
    return undefined;
  }

  let arrLength = arr.length;

  if (arrLength === 0) {
    return 1;
  }

  const arrSum1 = ((arrLength + 1) * (arrLength + 1 + 1)) / 2;

  let arrSum2 = 0;
  for (let i = 0; i < arrLength; i++) {
    arrSum2 += arr[i];
  }

  return arrSum1 - arrSum2;
}

module.exports = findMissingNumber;
