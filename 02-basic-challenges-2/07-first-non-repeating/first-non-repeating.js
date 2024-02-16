function findFirstNonRepeatingCharacter(strArg) {
  let store = {};

  for (let i = 0; i < strArg.length; i++) {
    if (store[strArg[i]]) {
      store[strArg[i]] += 1;
    } else {
      store[strArg[i]] = 1;
    }
  }

  for (let i = 0; i < strArg.length; i++) {
    if (store[strArg[i]] === 1) {
      return strArg[i];
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
