import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../componentes/Carregando';
import Form from '../componentes/Formulario';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  state = {
    valorImputado: '',
    carregando: false,
    btnDisabled: true,
  };

  criarUsuarioResultado = async () => {
    const { valorImputado } = this.state;
    this.setState({
      carregando: true,
    });
    const { history } = this.props;
    await createUser({
      name: valorImputado,
    });
    this.setState({
      carregando: false,
    });
    history.push('/search');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const result = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: result }, this.handleError);
  };

  handleError = () => {
    const { valorImputado } = this.state;
    const lenghtMin = 3;
    const casosErro = [valorImputado.length < lenghtMin];
    const desabilitado = casosErro.every((error) => error !== true);
    this.setState({ btnDisabled: !desabilitado });
  };

  render() {
    const { btnDisabled, carregando, valorImputado } = this.state;
    return (
      <section>
        <section data-testid="page-login">
          {(carregando) && <Loading /> }
          <Form
            htmlFor="formLogin"
            btnDisabled={ btnDisabled }
            value={ valorImputado }
            textBtn="Entrar"
            estadoNome="valorImputado"
            onChange={ this.handleChange }
            inputTestData="login-name-input"
            onClick={ this.criarUsuarioResultado }
            btnDataTest="login-submit-button"
          />
        </section>
      </section>
    );
  }
}

Login.propTypes = { estadoNome: PropTypes.string }.isRequired;
