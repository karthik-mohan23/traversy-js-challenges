function calculateTotalSalesWithTax(productArr) {
  const price = productArr.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalPrice = price + (price * 8) / 100;

  return totalPrice;
}

module.exports = calculateTotalSalesWithTax;
