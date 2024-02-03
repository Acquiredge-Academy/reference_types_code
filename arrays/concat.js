const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
// Array.concat(): combines the elements of 2 or more arrays and returns a new array with all the elements
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// concat() is not destructive: it doesn't affec the original arrays
console.log(array1);
// Expected output: [ 'a', 'b', 'c' ]