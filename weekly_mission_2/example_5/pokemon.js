/*
Este ejemplo incluye dependencias. En tu línea de comando ve a este proyecto y ejecuta el comando `npm install` para descargar las dependencias, esto creará una carpeta node_modules

-- Se añadio node_modules a gitignore para no subir los archivos al repo
*/
export default class Pokemon {
  constructor(name, type, age){
    this.name = name
    this.type = type
    this.age = age
    this.attacks = []
  }

  get getAttacks(){
    return this.attacks
  }

  set setAttacks(attacks){
    return this.attacks = attacks
  }
}

const myPokemon = new Pokemon("Charmander", "Fuego", 10)
console.log(myPokemon)