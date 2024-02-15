function areAllCharactersUnique(str) {
  const holdStr = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (holdStr[char]) {
      return false;
    } else {
      holdStr[char] = true;
    }
  }

  return true;
}

module.exports = areAllCharactersUnique;
