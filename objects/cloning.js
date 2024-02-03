let student = {
    name: "Kevin",
    age: 16,
    year: "Sophomore",
    grades: { math: 90 }
}

// const another = {};
// for(let key in student) {
//     another[key] = student[key];
// }

// const another = {...student};

const another = Object.assign({}, student);
student.grades.math = 95;

console.log(student);
console.log(another);
