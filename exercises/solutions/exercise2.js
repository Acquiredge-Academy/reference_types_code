// Exercise 2: Object Equality
// Write a function that compares two shallow objects and checks if they are equal
// Hint: Look up the Object.keys() method:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function isShallowEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    // Check if the number of keys are equal in obj1 and obj2
    if(obj1Keys.length !== obj2Keys.length) return false;
    // Loop over the objects and make sure that their property values are the same
    for(let i in obj1Keys) {
        let key = obj1Keys[i];
        if(obj1[key] !== obj2[key]) return false;
    }
    // If none of the above checks fail, then return true
    return true;
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