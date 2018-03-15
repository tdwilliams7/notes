import React, { PureComponent } from 'react';

class Auth extends PureComponent {
  state = {
    password: '',
    username: ''
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleAuthSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Please log in to make notes</h2>
        <form onSubmit={this.handleAuthSubmit}>
          <input
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            autoComplete="off"
          />
          <button>Sign in</button>
        </form>
        <div>or register</div>
      </div>
    );
  }
}

export default Auth;
