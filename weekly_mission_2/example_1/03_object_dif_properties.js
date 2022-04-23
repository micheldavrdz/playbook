const myObject = {
    name: 'Roger',
    age: '30',
    nicknames: [
        'Roginator',
        'Rogerto',
        'Rogaldo',
    ],
    address: {
        zip_code: '11450',
        street: 'Eucalipto, Anahuac',
        city: 'Miguel Hidalgo, CDMX',
    }
};

console.log('Example 3: Create an object with different properties');
console.log(myObject);
console.log(myObject.name); // Only print Roger
console.log(myObject['address']) // Print roger's address