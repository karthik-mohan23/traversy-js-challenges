function countVowels(str) {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsArray.includes(str.toLowerCase()[i])) {
      ++count;
    }
  }
  return count;
}

module.exports = countVowels;
