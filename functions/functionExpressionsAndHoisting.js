walk(); // WORKS!
// Function Declaration
function walk() {
    console.log("walk");
}
run(); // Does not work
// Function Expressions
let run = function() {
    console.log("run");
};
move(); // Does not work
// Arrow Functions
let move = () => {
    console.log("move");
};