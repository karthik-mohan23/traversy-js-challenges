function generateHashtag(strParam) {
  let sanitizeString = strParam.trim();

  if (!sanitizeString) {
    return false;
  }

  //   It will split the string wherever there are one or more whitespace characters
  let arr = sanitizeString.split(/\s+/);

  let capiataliseFirstLetter = arr.map(
    (item) => item[0].toUpperCase() + item.slice(1)
  );

  let addHashtag = "#" + capiataliseFirstLetter.join("");

  if (addHashtag.length > 140) {
    return false;
  }
  return addHashtag;
}

module.exports = generateHashtag;
