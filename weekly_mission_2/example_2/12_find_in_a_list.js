const scores = [
    {name: 'A', score: 95},
    {name: 'M', score: 98},
    {name: 'O', score: 80},
    {name: 'N', score: 50},
    {name: 'G', score: 85},
    {name: 'U', score: 100},
    {name: 'S', score: 90},
];
const score_less_80 = scores.find(user => user.score < 80); // Find the first element (a user in this case) on the list that has a score that's less than 80

console.log(`Example 12: Using find to "find" the name of the first user with a score less than 80, which is: ${score_less_80.name}`);