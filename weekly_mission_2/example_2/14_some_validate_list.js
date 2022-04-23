const bools = [true, true, false, true];
const areSomeFalse = bools.some(bool => bool === false); // Validates if there's at least one false on the list (returns true or false)

console.log(`Example 14: Using some to validate if there's at least one false on the list, which is: ${areSomeFalse}`);