class Repository {
    constructor(name, author, language, stars) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.stars = stars;
    }
    // This is a function that will execute any object instantiated from this class
    getInfo() {
        return `Repository ${this.name} has ${this.stars}`;
    }
}

console.log('Example 4: Methods in objects');

const myRepo = new Repository('LaunchX', 'micheldavrdz', 'JS', 100);

console.log(myRepo.getInfo());