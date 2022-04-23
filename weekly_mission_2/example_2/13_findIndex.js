const names = ['Explorer1', 'Explorer2', 'Explorer3', 'Explorer4', 'Explorer5']
const length_greater_7 = names.findIndex(name => name.length > 7) // Find the index of the first element that has a length greater than 7 (returns -1 if not found)

console.log(`Example 13: Using findIndex to find the index of the first element that has a length greater than 7, which is: ${length_greater_7}, aka '${names[length_greater_7]}'`);