const pet = {
    name: 'Alex',
    // This is a function that's saved as a property of the pet object
    sayHello: function() {
        // this.name references the name property of the pet object (aka 'Alex')
        console.log(`Hi! I'm ${this.name}`);
    }
};

console.log('Example 4: Create an object with methods');
pet.sayHello(); // Hi! I'm Alex