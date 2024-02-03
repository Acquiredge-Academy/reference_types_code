const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale'];

plants.push('tomato', 'lettuce');

console.log(plants);
// Expected output: [ 'broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', 'lettuce' ]

console.log(plants.pop());
// Expected output: lettuce

console.log(plants);
// Expected output: [ 'broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato' ]

plants.pop();

console.log(plants);
// Expected output: [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]
