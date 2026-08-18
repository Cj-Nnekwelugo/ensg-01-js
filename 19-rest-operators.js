// Rest in function parameters
function doSum(...nums) {
    const result = nums.reduce((acc, value) => acc + value, 0);
    return result;
}

// Explaining acc
// [1, 2, 3, 4, 5]
// 0 + 1 = 1
// 1 + 2 = 3 ... and so on.

console.log(doSum(10, 15, 15, 25));

function doMultiply(baseNumber, ...nums) {
    const result = nums.map(num => baseNumber * num);
    console.log(result);
}

doMultiply(5, 1, 2, 3, 4, 5);