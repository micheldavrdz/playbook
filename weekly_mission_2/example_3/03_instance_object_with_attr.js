class Student {
// constructors allow us to instantiate objects and assign attributes (using 'this')
  constructor(name, age, subjects) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }
};

// Create an object using Student class (this is called instantiation)
const michelStudent = new Student('Michel', 28, ['NodeJS', 'Python']);

console.log('Example 3: Instance objects with attributes');
console.log(michelStudent);