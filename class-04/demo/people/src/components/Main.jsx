import React from 'react';
import Form from './Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [{
        username: 'Jacob',
        dob: '2022-10-14'
      }],
      sort: '',
    }
  }

  addPerson = (person) => {
    // this.state.people.push(person);
    this.setState({
      people: [...this.state.people, person],
    });
  }

  handleSort = (sort) => {
    this.setState({
      sort: sort,
    }, this.sortPeople); // calls sortPeople after our sort is set in state
  }

  sortPeople = () => {
    let newPeople = [...this.state.people];
    newPeople.sort((a, b) => {
      if (a.username < b.username) {
        return -1
      } else if (a.username > b.username) {
        return 1
      } else {
        return 0
      }
    });
    this.setState({
      people: newPeople,
    });
  }

  render() {
    console.log(this.state.people)
    return (
      <Container>
        <h2>Here are some people</h2>
        {/* <select>
          <option value="name">Name</option>
        </select> */}
        <DropdownButton  title="sortBy">
          <Dropdown.Item onClick={() => this.handleSort('username')}>Name</Dropdown.Item>
          {/* <Dropdown.Item onClick={() => this.handleSort('dob')}>Birth date</Dropdown.Item> */}
        </DropdownButton>
        {this.state.people.map(person => (
          <Card>
            <Card.Header>
              <Card.Text>Name: {person.username}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>Date of Birth: {person.dob}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        <Form onSubmit={this.addPerson} />
      </Container>
    )
  }
}

export default Main;
