function dicerollNumGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
  let finalResults = [];

  for (let i = 0; i < numSimulations; i++) {
    let dice1 = dicerollNumGenerator();
    let dice2 = dicerollNumGenerator();
    let result = "";
    let sum = dice1 + dice2;
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    finalResults.push({ dice1, dice2, sum, result });
  }

  return finalResults;
}

module.exports = diceGameSimulation;
