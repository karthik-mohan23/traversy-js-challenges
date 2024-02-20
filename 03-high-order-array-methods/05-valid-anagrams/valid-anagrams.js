function validAnagrams(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  let arr1 = str1.split("");
  let arr2 = str2.split("");

  for (let i = 0; i < arr1.length; i++) {
    if (obj1[arr1[i]]) {
      obj1[arr1[i]] += 1;
    } else {
      obj1[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj2[arr2[i]]) {
      obj2[arr2[i]] += 1;
    } else {
      obj2[arr2[i]] = 1;
    }
  }

  return Object.keys(obj1).every((char) => obj1[char] === obj2[char]);
}

module.exports = validAnagrams;
