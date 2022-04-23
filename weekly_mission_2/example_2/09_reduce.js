const numbers = [1, 2, 3, 4, 5];
const result_of_reduce = numbers.reduce((acc, cur) => acc + cur, 0);

console.log('Example 9: Using reduce to sum up all the numbers on the list');
console.log(result_of_reduce);