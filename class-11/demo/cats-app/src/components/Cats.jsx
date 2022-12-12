import React from 'react';
import axios from 'axios';

class Cats extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      search: ""
    }
  }

  componentDidMount = () => {
    this.fetchCats();
  }

  fetchCats = async (catName) => {
    let request = {
      method: 'GET',
      url: 'http://localhost:3001/cats'
    }
    if (catName) {
      request.url += `?name=${catName}`
    }
    console.log(request);
    let response = await axios(request);
    this.setState({
      cats: response.data,
    });
  }

  handleChange = (e) => {
    console.log('handle change running', e.target.value)
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div id="cats-component">
        <input onChange={this.handleChange} type="text"/>
        <button onClick={() => this.fetchCats(this.state.search)}>Search for Cat</button>
        {this.state.cats.map(cat => {
          return (
            <div>
              <h2>{cat.name}</h2>
              <p>{cat.age}</p>
              <p>{cat.color}</p>
              <p>{cat.gender}</p>
              <p>{cat.favoriteActivity}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cats;
