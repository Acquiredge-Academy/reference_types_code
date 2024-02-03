const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// Array.indexOf(element): returns the index of that element
console.log(beasts.indexOf('bison'));
// Expected output: 1

// Array.indexOf(element, startIndex): returns the index of the element AFTER the startIndex
// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
