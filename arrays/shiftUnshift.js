const array1 = [1, 2, 3];

// Array.unshift(element1, element2, ...): adds elements to the beginning of the array
array1.unshift(4, 5);

console.log(array1);
// Expected output: [4, 5, 1, 2, 3]

// Array.shift(): removes an element from the beginning of the array and returns it
console.log(array1.shift());
// Expected output: 4

console.log(array1);
// Expected output: [5, 1, 2, 3]