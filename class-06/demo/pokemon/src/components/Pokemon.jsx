import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  fetchPokemon = async () => {
    let request = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/',
    }

    // this will happen asynchronously?
    let response = await axios(request); // makes our HTTP request and returns our response.
    console.log(response); //
    this.setState({
      data: response.data.results
    });
  }

  render() {
    return (
      <div>
        <h2>Pokedex</h2>
        <ul>
          {this.state.data.length
            ? <>{this.state.data.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}</>
            : <p>No Pokemon to display</p>
          }
        </ul>
        <button onClick={this.fetchPokemon}>Fetch Pokemon!</button>
      </div>
    )
  }
}

export default Pokemon;
