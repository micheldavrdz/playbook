const names = ['Explorer1', 'Explorer2', 'Explorer3', 'Explorer4', 'Explorer5']
const areAllStr = names.every(name => typeof name === 'string') // Validate that all elements on the list are strings (returns true or false)

console.log(`Example 10: Using every to validate that all elements on the list are strings, which is: ${areAllStr}`);