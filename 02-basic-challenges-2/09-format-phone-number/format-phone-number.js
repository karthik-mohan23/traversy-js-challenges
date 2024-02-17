function formatPhoneNumber(arrNum) {
  return `(${arrNum.slice(0, 3).join("")}) ${arrNum
    .slice(3, 6)
    .join("")}-${arrNum.slice(6).join("")}`;
}

module.exports = formatPhoneNumber;
