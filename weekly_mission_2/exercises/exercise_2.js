const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

console.log('1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH\n');

explorers.forEach(explorer => {
    console.log(explorer.name);
})

console.log('\n2. Imprime el stack de cada explorer, usa FOR EACH\n');

explorers.forEach(explorer => {
    console.log(explorer.stack);
})

console.log('\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP\n');

const explorer_stacks = explorers.map(explorer => {
    return explorer.stack;
})

console.log(explorer_stacks);

console.log('\n4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)\n');

const explorers_js = explorers.filter(explorer => {
    return explorer.stack.includes('js');
})

console.log(explorers_js);

console.log('\n5. Busca el primer explorer que sea de la CDMX, usa FIND\n');

const first_explorer_cdmx = explorers.find(explorer => {
    return explorer.city === 'CDMX';
})

console.log(first_explorer_cdmx);

console.log('\n6. Obtén la suma de todos los exercises_completed, usa REDUCE\n');

const exercises_completed_sum = explorers.reduce((acc, explorer) => 
    acc + explorer.exercises_completed, 0
)

console.log(exercises_completed_sum);

console.log('\n7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME\n');

const finished_exercises = explorers.some(explorer => {
    return explorer.missions.frontend.exercisesFinished;
})

console.log(finished_exercises);

console.log('\n7. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.\n');

const everyone_finished_onboarding = explorers.every(explorer => {
    return explorer.missions.onboarding.isFinished;
})

console.log(everyone_finished_onboarding);