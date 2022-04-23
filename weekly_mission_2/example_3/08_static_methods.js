// Static methods help us to create a method that can be called without an object.
class Toolbox {
    static getMostUsefulTool() {
        return ['Command Line', 'Git', 'Text Editor'];
    }
}

console.log('Example 8: Static methods');
console.log(Toolbox.getMostUsefulTool());

// If we try to instantiate an object, we won't be able to call the static method.
// const toolbox = new Toolbox();
// console.log(toolbox.getMostUsefulTool()); // This isn't a function