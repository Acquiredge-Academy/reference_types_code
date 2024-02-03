const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" [ 'one', 'two', 'three' ]

// Array.reverse(): reverses the array and returns a reference to the reversed array
const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: reversed: ['three', 'two', 'one']

// reverse is destructive, meaning it changes the original array.
console.log('array1:', array1);
// Expected output: array1: ['three', 'two', 'one']
