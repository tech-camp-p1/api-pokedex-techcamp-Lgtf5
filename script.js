

const pokemon_count = async () => {
    try {
    for (let i = 1; i <= 150; i++) {
        await getPokemon(i);
    } 
} catch (error) {
    console.log("transfer failed", error);
}
};

const getPokemon = async (id) => {  
    try {
        const APIURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(APIURL);
        const pokemonData = await response.json();
        createPokemonCard(pokemonData);
        console.log("connection success", pokemonData);
    }
    catch (error) {
        console.log("conection failed", error);
    }
};


const poke_container = document.getElementById('poke-container')

const typeColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon');

    const pokemonTypes = pokemon.types.map(type => type.type.name);
    const type = pokemonTypes[0];
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = typeColors[type];

    pokemonCard.style.backgroundColor = color;

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonCard.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonCard);
};

pokemon_count();





//conxion ok
/* Deberás crear createPokemonCard: se encargará de Traer: 
- el nombre del pokemon
- el id
- el tipo de pokemon, este será útil para hacer match con el fondo que debe tener cada pokemon 
 */


