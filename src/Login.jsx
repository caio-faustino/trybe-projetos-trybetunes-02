import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from './services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      nameLogin: '',
      output: '',
    };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkNameLength = this.checkNameLength.bind(this);
  }

  async handleRequest(nameObj) {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await createUser(nameObj);
        this.setState({
          loading: false,
          output: 'OK',
        });
      },
    );
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value,
    });
  }

  checkNameLength() {
    const { nameLogin } = this.state;
    const rangeMin = 3;
    return nameLogin.length < rangeMin;
  }

  render() {
    const { nameLogin, loading, output } = this.state;
    const nameRequest = { name: nameLogin };
    const outputGet = output === 'OK';
    const formLogin = (
      <form>
        <p>Login</p>
        <label
          htmlFor="login-name"
        >
          Insira seu Nome
          <input
            data-testid="login-name-input"
            onChange={ this.handleChange }
            type="text"
            id="login-name"
            name="nameLogin"
          />
        </label>
        <button
          data-testid="login-submit-button"
          disabled={ this.checkNameLength() }
          type="submit"
          onClick={ async () => this.handleRequest(nameRequest) }
        >
          Entrar
        </button>
      </form>);
    return (
      <section data-testid="page-login">
        <span>{ outputGet ? <Redirect to="/search" /> : console.log('waiting') }</span>
        {loading ? <Loading /> : formLogin }
      </section>
    );
  }
}

export default Login;
