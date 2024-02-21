function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((initial, current) => {
    return initial + current.mileage;
  }, 0);
  const averageMileage = Number((totalMileage / cars.length).toFixed(2));
  const highestMileageCar = cars.reduce((initial, current) => {
    if (current.mileage > initial.mileage) {
      return current;
    } else {
      return initial;
    }
  }, cars[0]);
  const lowestMileageCar = cars.reduce((initial, current) => {
    return initial.mileage < current.mileage ? initial : current;
  }, cars[0]);

  return {
    totalMileage,
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
  };
}

module.exports = analyzeCarMileage;
