function sumOfEvenSquares(arr) {
  const evenNumArr = arr.filter((item) => item % 2 === 0);

  const squareNumsArr = evenNumArr.map((item) => item ** 2);

  const totalSum = squareNumsArr.reduce((acc, item) => acc + item, 0);

  return totalSum;
}

module.exports = sumOfEvenSquares;
