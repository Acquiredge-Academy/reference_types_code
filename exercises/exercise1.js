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


// Task 2: Change the head of the science department to: "Dr.Turing"


// Task 3: Add a new class named "Drama" to the arts department with 15 students and no lab requirement


// Task 4: Increase the number of students in the "Physics" class by 5


// Task 5: Create an array containing the names of all classes in the science department

