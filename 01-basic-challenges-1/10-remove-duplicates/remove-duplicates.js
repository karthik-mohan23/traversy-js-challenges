function removeDuplicates(arr) {
  const removeDuplicatesArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (removeDuplicatesArray.includes(arr[i])) {
      continue;
    } else {
      removeDuplicatesArray.push(arr[i]);
    }
  }

  return removeDuplicatesArray;
}

module.exports = removeDuplicates;
