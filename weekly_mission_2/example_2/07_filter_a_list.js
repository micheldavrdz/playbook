const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Estonia'];
const countriesContainingLand = countries.filter(country => country.includes('land')); // filter the list based on the condition you specify (in this case, only if a country has 'land' somewhere in it)

console.log('Example 7: Using filter to "filter" out a list');
console.log(countriesContainingLand);

const countriesEndsWithIa = countries.filter(country => country.endsWith('ia')); // filter the list based on the condition you specify (in this case, only if a country ends with 'ia')

console.log('Example 7: Using filter to "filter" out a list if their name ends with "ia"');
console.log(countriesEndsWithIa);