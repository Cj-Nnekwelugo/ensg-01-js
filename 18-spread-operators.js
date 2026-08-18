const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c", "d", "e"];

// Spread with Arrays
// Using spread to copy an array
const newNumbers = [...numbers, 6, 7];
console.log(newNumbers);
console.log(numbers);

const combinedArrayElements = [...numbers, ...letters];
console.log(combinedArrayElements);

// Converting a string to an array using the spread operator
const myName = "Max Andrew";
const lettersInMyName = [...myName];
console.log(lettersInMyName);


// Spread with Objects
const student = {
    name: "Seth Mathew",
    location: "Vatican City",
    occupation: "Priest"
}

const course = {
    courseName: "Psychology",
    regNo: "PSY35783"
}

// Copy
const copied = {...student};
console.log(copied);

// Updates
const update = {...student, name: "John Doe"}
console.log(update);

const modifiedStudent = {...student, email: "seth@email.com"};
console.log(modifiedStudent);

// merging
const merged = {...student, ...course};
console.log(merged);