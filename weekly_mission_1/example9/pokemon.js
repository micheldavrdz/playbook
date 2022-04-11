class Pokemon {
  constructor(pokeName) {
    this.name = pokeName;
  }

// Usando template strings para juntar texto y la variable

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  }
  sayMessage(message) {
    console.log(`Mi pokemon ${this.name} dice: ${message}`);
  }
}

module.exports = Pokemon;
