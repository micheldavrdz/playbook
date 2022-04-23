const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries.map(country => country.toUpperCase().slice(0, 3)); // slice 'slices' only the amount of characters you specify (in this case 3)

console.log('Example 6: Using Map to print out the first three letters of each country on a list in uppercase');
console.log(countriesFirstThreeLetters);
