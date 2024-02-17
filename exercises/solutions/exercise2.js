// Exercise 2: Object Equality
// Write a function that compares two shallow objects and checks if they are equal
function isEqual(obj1, obj2) {

}

// Examples
const person1 = {
    name: "John",
    age: 25,
    favoriteFood: "Pizza"
};
const person2 = {
    name: "Kevin",
    age: 25,
    favoriteFood: "Pizza"
};
const person3 = {
    age: 25,
    favoriteFood: "Pizza",
    name: "John"
};
const person4 = {
    name: "John",
    age: 25,
    favoriteFood: "Pizza",
    location: "Brooklyn"
};

console.log(isShallowEqual(person1, person2)); // Expected: false
console.log(isShallowEqual(person1, person3)); // Expected: true
console.log(isShallowEqual(person1, person4)); // Expected: false