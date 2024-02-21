const isValidIPv4 = (ipString) => {
  const ipArray = ipString.split(".");
  if (ipArray.length !== 4) {
    return false;
  }

  const isValidIp = ipArray.every((ip) => {
    const numberIp = parseInt(ip);
    return numberIp > 0 && numberIp <= 255 && numberIp.toString() === ip;
  });
  return isValidIp;
};

module.exports = isValidIPv4;
