import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Gardevoir')
  expect(myPokemon.name).toBe('Gardevoir'); // Corrige esta prueba -- Se cambio el nombre del pokémon a Gardevoir
});