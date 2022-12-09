'use strict';

// this another version axios => makes requests.
const superagent = require('superagent');
const POKEMON_API_URL = process.env.POKEMON_API_URL;

const cache = {};

async function handlePokemon(request, response, next) {
  let searchQuery  = request.query.searchQuery;
  let pokemonData = {}

  // before we make any requests we want to check if this searchQuery, has been made before
  if (cache[searchQuery]) { // read from our cache object
    console.log('Data found, dont query API', cache);
    pokemonData = new Pokemon(cache[searchQuery]);
    response.send(pokemonData);
  } else {
    console.log('No data found, getting data from API', cache);
    let req = {
      method: 'GET',
      url: `${POKEMON_API_URL}/pokemon/${searchQuery}`,
    }
    try {
      let res = await superagent.get(req.url);
      cache[searchQuery] = res._body;
      // let pokemonData = res._body.map(pokemon => new Pokemon(pokemon));
      pokemonData = new Pokemon(res._body);
      response.send(pokemonData);
    } catch(e) {
      console.log(e);
      response.status(500).send('Server Error');
    }
  }

}

class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.abilities = data.abilities.map(ability => ability.name);
    this.img_url = data.sprites.front_default;
  }
}

module.exports = handlePokemon;
