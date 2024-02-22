function validatePassword(password) {
  const passwordArray = password.split("");

  const hasValidLength = passwordArray.length >= 8;

  //   doing char === char.toUpperCase() for "2" gives you true (indicating there's an uppercase letter when there's a number) even though it shouldn't.
  const hasUpperCaseLetter = passwordArray.some(
    (letter) =>
      letter === letter.toUpperCase() && !Number.isInteger(parseInt(letter))
    //   letter aanenki NaN kittum athu integer alathathkondu false kittum pakshe nml ! vachu true aakum - letter vannal true aakanam athinu vendi
    // Number vannal false aakanam
  );

  const hasLowerCaseLetter = passwordArray.some(
    (letter) =>
      letter === letter.toLowerCase() && !Number.isInteger(parseInt(letter))
  );

  const hasDigit = passwordArray.some((letter) => !isNaN(parseInt(letter)));

  return hasDigit && hasLowerCaseLetter && hasUpperCaseLetter && hasValidLength;
}

module.exports = validatePassword;
