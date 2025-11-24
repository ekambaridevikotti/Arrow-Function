// L0 - Square and Cube of a Number with Implicit Return

const calculateValues = num => ({
  square: num * num,
  cube: num * num * num
});

// Test Case
console.log(calculateValues(5)); // Output: { square: 25, cube: 125 }
