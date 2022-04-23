class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.exercises_completed = 0;
        this.excercise_todo = 99;
    }

    // We can access this class's attributes
    get getExericisesCompleted() {
        return this.exercises_completed;
    }
}

console.log("Example 6: Access an object's attributes using getter");

const woopa = new Ajolonauta('Woopa', '1', []);

console.log(woopa.getExericisesCompleted);