export default class MyPokemon {
  constructor(pokeName) {
    this.name = pokeName;
  }

  // Usando template strings para juntar texto y la variable

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  }
}
