const myPet = {
    name: 'Alex',
    sayHiToMyPet: function(yourPet) {
        console.log(`${this.name} says hi to ${yourPet}!`);
    }
};

console.log('Example 5: Create an object with methods that accepts parameters');
myPet.sayHiToMyPet('Isabelle'); // Alex says hi to Isabelle!