function isEnoughCapacity(products, containerSize) {
    const sumOfProducts = 0;
    for (let product of products) {
        if (product.name === productName) {
            product.value 
        }
        return sumOfProducts;
    }
    if (sumOfProducts <= containerSize) {
        return true;
    } else {
        return false;
    }
  return `Product ${productName} not found!`;
}
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (let product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`;
}