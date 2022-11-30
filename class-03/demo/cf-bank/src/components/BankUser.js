import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class BankUser extends React.Component {


  render() {
    return (
      <Card style={{ width: '300px' }}>
        <Card.Body>
          <Card.Text>Bank User: {this.props.user}</Card.Text>
          <Card.Text>User Money: {this.props.money}</Card.Text>
          <Button onClick={() => this.props.handleClick(1000)}>Give me 1000 dollars</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default BankUser;
