import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      dob: '',
    }
  }

  // handle input changing
  handleChange = (event) => {
    let {name, value} = event.target; // object destructuring
    // let name = event.target.name;
    // let value = event.target.value;
    // console.log('Here is the input name: ', name);
    // console.log('Here is the input value: ', value);
    this.setState({ [name]:  value });
  }

  // handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!!');
    this.props.onSubmit({
      username: this.state.username,
      dob: this.state.dob
    });
  }

  render() {
    return (
      <form id="myForm" onSubmit={this.handleSubmit}>
        {/* <p>{this.state.username}</p>
        <p>{this.state.dob}</p> */}
        <label htmlFor="name">Name</label>
        <input onChange={this.handleChange} type="text" name="username" id="name" />
        <br />
        <label htmlFor="dob">Date of Birth</label>
        <input onChange={this.handleChange} type="date" name="dob" id="dob" />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
