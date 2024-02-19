function highestScoringWord(testStr) {
  const arrStr = testStr.split(" ");

  // create array for scores
  const scoresArr = arrStr.map((str) => {
    let score = 0;
    for (let i = 0; i < str.length; i++) {
      score += str[i].charCodeAt() - 96;
    }
    return score;
  });
  const maxValue = Math.max(...scoresArr);
  const maxIndex = scoresArr.indexOf(maxValue);

  return arrStr[maxIndex];
}

// function highestScoringWord(testStr) {
//   const arrStr = testStr.split(" ");

//   const obj = {};
//   let score = 0;
//   let storeScore = 0;
//   for (let i = 0; i < arrStr.length; i++) {
//     storeScore = 0;
//     const str = arrStr[i];

//     for (let j = 0; j < str.length; j++) {
//       if (obj[str]) {
//         continue;
//       } else {
//         let letter = str[j];
//         let charCode = letter.charCodeAt() - 96;
//         storeScore += charCode;
//       }
//     }

//     if (storeScore > score) {
//       score = storeScore;
//     }
//     obj[str] = storeScore;
//   }

//   return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
// }

module.exports = highestScoringWord;
