class Developer {
    constructor(name, mainLang, stack) {
        this.name = name;
        this.mainLang = mainLang;
        this.stack = stack;
    }

    get getName() {
        return this.name;
    }
}

console.log('Example 9: Inheritance between classes');

const carloDev = new Developer('Carlo', 'JS', ['Elixir', 'Groovy', 'Lisp']);

console.log(carloDev);

// "Extends" is used to inherit a class properties into another defined class
// We can define an empty class and then use "extends" to inherit the properties

class LaunchXStudent extends Developer {}

const carloLaunchX = new LaunchXStudent('Carlo', 'JS', ['Elixir', 'Groovy', 'Lisp']);

console.log(carloLaunchX);
console.log(carloLaunchX.getName); // Using Developer's getter that we inherited