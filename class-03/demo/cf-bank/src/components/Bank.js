import React from 'react';
import Container from 'react-bootstrap/Container';
import BankUser from './BankUser';
import OverdraftModal from './OverdraftModel';
// import Users from '../users.json';

class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMoney: 10000,
      showOverdraftModel: false,
      // user: {name: 'Jacob', money: 0}
      jacobsMoney: 0,
    }
  }

  // Fat arrows don't bind 'this'
  debit = (amount) => {
    if (this.state.totalMoney > 0) {
      this.setState({
        totalMoney: this.state.totalMoney - amount,
        jacobsMoney: this.state.jacobsMoney + amount,
      });
    } else {
      this.showModal();
    }
  }

  showModal = () => {
    this.setState({ showOverdraftModel: true });
  }

  hideModal = () => {
    this.setState({ showOverdraftModel: false });
  }

  render() {
    return (
      <Container>
        <h1>Welcome to the CF Bank</h1>
        <p>Total Amount in Bank: {this.state.totalMoney}</p>
        <BankUser handleClick={this.debit} user="Jacob" money={this.state.jacobsMoney} />
        <OverdraftModal hideModal={this.hideModal} showModal={this.state.showOverdraftModel}/>
      </Container>
    )
  }
}

export default Bank;
