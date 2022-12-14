import React from 'react';
import axios from 'axios';
import UpdateCat from './UpdateCat';

class Cats extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      search: "",
      selectedCat: null
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

  updateRequest = async (cat) => {
    // make our request
    console.log(cat);
    let response = await axios.put(process.env.REACT_APP_SERVER_URL + `/cats/${cat._id}`, {
      name: cat.name,
      age: cat.age,
      gender: cat.gender,
      favoriteActivity: cat.favoriteActivity,
      color: cat.color
    });
    let updatedCat = response.data;
    console.log(this.state.cats, updatedCat);
    // set our components state with our updated cat.
    // this.setState({ cats: this.state.cats.map(cat => {
    //   if (cat._id === updatedCat._id) {
    //     return updatedCat;
    //   } else {
    //     return cat;
    //   }
    // })
    // });
    this.fetchCats();
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
              <button onClick={() => this.setState({ selectedCat: cat })}>Update This Cat</button>
              {/* <UpdateCat cat={cat} handleUpdate={this.updateRequest} /> */}
            </div>
          )
        })}
        {this.state.selectedCat
          ? <UpdateCat
              closeModal={() => this.setState({ selectedCat: null })}
              cat={this.state.selectedCat}
              handleUpdate={this.updateRequest}
            />
          : null
        }
      </div>
    )
  }
}

export default Cats;
