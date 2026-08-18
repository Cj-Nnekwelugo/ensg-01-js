// Array destructuring
const fruits = ["banana", "mango", "watermelon", "orange", "gauva"];

// const [firstFruit, secondFruit] = fruits;
const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit);
console.log(thirdFruit);

// Array destructuring with rest operator
const colors = ["red", "blue", "gold", "yellow", "black"];
const [firstCol, secondCol, ...restColors] = colors;
console.log(firstCol);
console.log(secondCol);
console.log(restColors);
console.log(`Rest of colors: ${restColors}`);

// Object destructuring
const person = {
    name: "John Doe",
    age: 20,
    occupation: "Data Analyst",
    location: {
        street: {
            streetNumber: 10,
            streetName: "Obiagu street",
        },
        city: "Enugu",
        state: "Enugu State"
    }
}

const {name, age, occupation, location: {street: {streetNumber, streetName}, state}} = person;
console.log(name);
console.log(age);
console.log(occupation);
console.log(streetNumber);
console.log(streetName);
console.log(state);

const worker = {
    name: "Max Williams",
    age: 25,
    role: "Frontend Engineer",
    location: {
        street: {
            streetNumber: 10,
            streetName: "Obiagu street",
        },
        city: "Enugu",
        state: "Enugu State"
    }
}

const {name: workerName, age: workerAge, role, location: {state: workerState}} = worker;
console.log(workerName);
console.log(workerAge);
console.log(role);
console.log(workerState);

const product = {
    name: "Laptop",
    price: "$1200",
    quantity: 1
}

// Destructuring objects with rest operator
const {name: productName, ...otherProductDetails} = product;
console.log(productName);
console.log(otherProductDetails);

const student = {
    studentName: "Alice Sandra",
    age: 21,
    course: "Computer science", 
    hobbies: ["reading", "singing", "coding"] 
}

const {studentName, hobbies: [firstHobby, ...otherHobbies]} = student;
console.log(studentName);
console.log(firstHobby);
console.log(otherHobbies);

// function displayObjectProps(object) {
//     console.log(object.studentName);
//     console.log(object.age);
//     console.log(object.course);
// }

function displayObjectProps({studentName, age, course}) {
    console.log(studentName);
    console.log(age);
    console.log(course);
}

displayObjectProps(student);