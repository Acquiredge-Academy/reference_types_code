let outer = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]];

// Find the sum of all the numbers in outer:
let sum = 0;

// Outer for loop
for(let i = 0; i < outer.length; i++){ // 3 times
    // Inner for loop
    for(let j = 0; j < outer[i].length; j++){ // 3 times per outer iteration
        sum += outer[i][j];
    }
}

console.log(sum);