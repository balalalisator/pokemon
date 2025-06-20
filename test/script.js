const types = ['fire', 'water', 'grass', 'dark', 'psychic', 'fairy', 'ghost', 'ice', 'steel', 'dragon', 'flying', 'fighting', 'bug', 'electric', 'rock', 'ground', 'normal', 'poison'];

const response = await fetch('http://127.0.0.1:5500/test/pokemon.json');
const data = await response.json();

//data.forEach(pokemon => {
  //if (pokemon.type === types[3]) {
    //document.getElementById('pokemon').innerHTML += `${pokemon.name}<br>`;
    //document.getElementById('pokemon').style.color = 'green'
  //}
///});


const input = document.getElementById('input');

input.addEventListener('input', function () {
  const value = input.value;
  const container = document.getElementById('pokemon');

  container.innerHTML = '';

  data.forEach(pokemon => {
    const type1 = pokemon.type;
    const type2 = pokemon.type2;
    const name = pokemon.name;

    if (type1 === value || type2 === value) {
      container.innerHTML += `${pokemon.name}<br>`;
      container.style.color = 'pink';
    } else if (name === value) {
      container.innerHTML += `${pokemon.type} / ${pokemon.type2}<br>`;
      container.style.color = 'red';
    }
  });
});

