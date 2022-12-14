import React from 'react';

class UpdateCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.cat._id,
      name: props.cat.name,
      age: props.cat.age,
      gender: props.cat.gender,
      favoriteActivity: props.cat.favoriteActivity,
      color: props.cat.color,
    }
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  }
  handleAge = (e) => {
    this.setState({ age: e.target.value });
  }
  handleGender = (e) => {
    this.setState({ gender: e.target.value });
  }
  handleFavoriteActivity = (e) => {
    this.setState({ favoriteActivity: e.target.value });
  }
  handleColor = (e) => {
    this.setState({ color: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.props.closeModal();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" onChange={this.handleName} value={this.state.name} />
        <input name="age" onChange={this.handleAge} value={this.state.age} />
        <input name="gender" onChange={this.handleGender} value={this.state.gender} />
        <input name="favoriteActivity" onChange={this.handleFavoriteActivity} value={this.state.favoriteActivity} />
        <input name="color" onChange={this.handleColor} value={this.state.color} />
        <button type="submit">update this cat</button>
      </form>
    )
  }
}

export default UpdateCat;
