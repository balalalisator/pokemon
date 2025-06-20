//const types = ['Fire', 'Water', 'Grass', 'Dark', 'Psychic', 'Fairy', 'Ghost', 'Ice', 'Steel', 'Dragon', 'Flying', 'Fighting', 'Bug', 'Electric', 'Rock', 'Ground', 'Normal', 'Poison'];

//const response = awaitfetch('http://127.0.0.1:5500/test/pokemon.json');
//const data = await response.json();

//data.forEach(pokemon => {
  //if (pokemon.type === types[3]) {
    //document.getElementById('pokemon').innerHTML += `${pokemon.name}<br>`;
    //document.getElementById('pokemon').style.color = 'green'
  //}
///});


 // const input = document.getElementById('input');

//input.addEventListener('input', function () {
 // const value = input.value;
 // const container = document.getElementById('pokemon');

 // container.innerHTML = '';

 // data.forEach(pokemon => {
  //  const type = pokemon.type;
   // const name = pokemon.name.english;

  //  if (type == value) {
  //    container.innerHTML += `${pokemon.name}<br>`;
  //    container.style.color = 'pink';
//    } else if (name === value) {
 //     container.innerHTML += `${pokemon.type} / ${pokemon.type2}<br>`;
    //  container.style.color = 'red';
  //  }
//  });
//}); 


const typesd = await fetch('types.json');
const types = await typesd.json();
console.log(types);

const movesd = await fetch('moves.json');
const moves = await movesd.json();
console.log(moves);

const pokemond = await fetch('pokemon.json');
const pokemon = await pokemond.json();
console.log(pokemon);

const itemsd = await fetch('items.json');
const items = await itemsd.json();
console.log(items);

const input = document.getElementById('input');

input.addEventListener('input', function () {
  const value = input.value.toLowerCase();
  const container = document.getElementById('pokemon');

  container.innerHTML = '';
  container.style.color = '';

  pokemon.forEach(mon => {
    const name = mon.name.english.toLowerCase();
    const types = mon.type.map(t => t.toLowerCase());
    const stats = Object.entries(mon.base)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');

    if (name === value) {
      container.innerHTML += `${ }, ${mon.name.english}<br>`;
      container.style.color = 'black';
    }
    else if (types.includes(value)) {
      container.innerHTML += `${mon.name.english}<br>`;
      container.style.color = 'red';
    }
  });
});

