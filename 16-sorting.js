// 1. Reverse method
// It modifies the original array
const letters = ["a", "b", "c", "d", "e"];
const reversedLettersArray = [...letters].reverse(); // [a, b, c, d, e]
console.log(reversedLettersArray);
console.log(letters);

// 2. toReversed method
// It does not modify the original array
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);
console.log(numbers);

// 3. Sort method
/* 
- Without a parameter
- Compare function

*/

// Without a parameter
const items = ["spoon", "umbrella", "sponge", "apple", "scissors"];
const sortedItems = items.sort();
console.log(sortedItems);

// 2
// The sort() is not efficient for sorting numbers
const prices = [1, 11, 10, 4, 19, 22, 2];
const sortedPrices = prices.sort();
console.log(sortedPrices);


// Sorting numbers with the compare function
const chosenNumbers = [1, 11, 10, 4, 19, 22, 2];
// Ascending order
// const sortedChosenNumbers = chosenNumbers.sort((a, b) => a - b);

// Descending order
const sortedChosenNumbers = chosenNumbers.sort((a, b) => b - a);
console.log(sortedChosenNumbers);


// The locale compare
const names = ["Zoe", "Álvaro", "Alice", "Émile", "Bob"];
const sortedNames = names.sort((a, b) => a.localeCompare(b));
console.log(sortedNames);

// const stringNumbers = ["1", "10", "2", "20"];


// Sorting Array of objects
// Sorting by name
const products = [
  { name: "Laptop", price: 450000 },
  { name: "Phone", price: 250000 },
  { name: "Headphones", price: 50000 },
  { name: "Keyboard", price: 35000 },
  { name: "Monitor", price: 180000 }
];

// Ascending order
// const productsByName = products.sort((a, b) => (a.name).localeCompare(b.name));

// Descending order
const productsByName = products.sort((a, b) => (b.name).localeCompare(a.name));
console.log(productsByName);


// Sorting by price
// Ascending oder
// const productsByPrice = products.sort((a, b) => a.price - b.price);

// Descending order
const productsByPrice = products.sort((a, b) => b.price - a.price);
console.log(productsByPrice);

/* 
=========== CLASS ACTIVITY ===============

const students = [
  { name: "Sarah", score: 75, age: 21 },
  { name: "Michael", score: 90, age: 22 },
  { name: "John", score: 75, age: 20 },
  { name: "Grace", score: 90, age: 20 },
  { name: "Daniel", score: 85, age: 21 },
  { name: "Esther", score: 75, age: 22 }
];

Sort the array:
(a) by name
(b) by score

*/

const students = [
  { name: "Sarah", score: 75, age: 21 },
  { name: "Michael", score: 90, age: 22 },
  { name: "John", score: 75, age: 20 },
  { name: "Grace", score: 90, age: 20 },
  { name: "Daniel", score: 85, age: 21 },
  { name: "Esther", score: 75, age: 22 }
];

// Sorting by score
const studentsByScore = students.sort((a, b) => a.score - b.score);
console.log(studentsByScore);


// Sorting by score first, then name.
const studentsSortResult = students.sort((a, b) => {
    // primary 
    if (a.score !== b.score) {
        return b.score - a.score;
    }

    // secondary
    return (a.name).localeCompare(b.name);
});

console.log(studentsSortResult);

