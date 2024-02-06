function titleCase(str) {
  const stringArray = str.split(" ");

  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] =
      stringArray[i].charAt(0).toUpperCase() + stringArray[i].substr(1);
  }

  return stringArray.join(" ");
}

module.exports = titleCase;
