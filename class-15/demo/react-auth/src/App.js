import React from 'react';
import './App.css';
import AuthButtons from './auth/AuthButtons';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class App extends React.Component {

  request = async () => {
    let res = await this.props.auth0.getIdTokenClaims();
    let token = res.__raw;
    console.log(token);

    let request = {
      method: 'GET',
      url: 'http://localhost:3001/test',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    let response = await axios(request);
    console.log(response.data);
  }

  render() {
    let auth0 = this.props.auth0;
    console.log(auth0.user);

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <AuthButtons />
          {auth0.isAuthenticated
            ? <button onClick={this.request}>Make Request</button>
            : null}
        </header>
      </div>
    );
  }

}

export default withAuth0(App);
