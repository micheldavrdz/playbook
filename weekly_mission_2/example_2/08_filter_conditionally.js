scores = [
    {name: 'A', score: 95},
    {name: 'M', score: 98},
    {name: 'O', score: 80},
    {name: 'N', score: 50},
    {name: 'G', score: 85},
    {name: 'U', score: 100},
    {name: 'S', score: 90},
]

const scoresGreater80 = scores.filter(score => score.score > 80);

console.log('Example 8: Using filter to "filter" out a list if their score is greater than 80');
console.log(scoresGreater80);