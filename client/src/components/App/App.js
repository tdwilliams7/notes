import React, { Component } from 'react';
import './App.css';

// components
import Topbar from '../Topbar/Topbar';
import Auth from '../Auth/Auth';

class App extends Component {
  state = {
    text: '',
    auth: false
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.auth === true ? (
          <div>
            <Topbar />
            <input
              placeholder="type here"
              name="text"
              onChange={this.handleInputChange}
              autoComplete="off"
            />
            <div>{this.state.text}</div>{' '}
          </div>
        ) : (
          <Auth />
        )}
      </div>
    );
  }
}

export default App;
