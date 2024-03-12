// Higher-order function to perform an operation on each element of an array
function operateOnArray(array, operation) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

// Example usage of the operateOnArray function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = operateOnArray(numbers, (x) => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
