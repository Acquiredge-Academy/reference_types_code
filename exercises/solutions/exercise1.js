// Exercise 1: Working with nested data
const school = {
    name: "Central High",
    address: {
        street: "101 Main St",
        city: "Springfield",
        zipCode: "12345"
    },
    departments: {
        science: {
            head: "Dr.Watson",
            classes: [
                { name: "Physics", students: 30, isLabRequired: true },
                { name: "Chemistry", students: 25, isLabRequired: true },
                { name: "Biology", students: 27, isLabRequired: true }
            ]
        },
        arts: {
            head: "Mrs.Smith",
            classes: [
                { name: "Literature", students: 20, isLabRequired: false },
                { name: "Art", students: 22, isLabRequired: false },
                { name: "Music", students: 18, isLabRequired: false }
            ]
        }
    }
};

// Task 1: Print the name of the city where the school is located
console.log(school.address.city);

// Task 2: Change the head of the science department to: "Dr.Turing"
school.departments.science.head = "Dr.Turing";
console.log(school.departments.science.head);
// Task 3: Add a new class named "Drama" to the arts department with 15 students and no lab requirement
school.departments.arts.classes.push({ name: "Drama", students: 15, isLabRequired: false });
console.log(school.departments.arts.classes);
// Task 4: Increase the number of students in the "Physics" class by 5
school.departments.science.classes[0].students += 5;
console.log(school.departments.science.classes);
// Task 5: Create an array containing the names of all classes in the science department
let classNames = [];
for(let i = 0; i < school.departments.science.classes.length; i++){
    classNames.push(school.departments.science.classes[i].name);
}
console.log(classNames);