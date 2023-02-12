import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Carregando';

export default class Header extends Component {
  state = {
    nomeUsuario: '',
    carregando: true,
  };

  componentDidMount() {
    this.pegarResultadoUsuario();
  }

  pegarResultadoUsuario = async () => {
    const { name } = await getUser();
    this.setState({
      carregando: false,
      nomeUsuario: name,
    });
    return name;
  };

  render() {
    const { carregando, nomeUsuario } = this.state;
    return (
      <section data-testid="header-component">
        <ul>
          <li>
            <Link to="/profile" data-testid="link-to-profile"> Perfil </Link>
          </li>
          <li>
            <Link to="/search" data-testid="link-to-search"> Pesquisar </Link>
          </li>
          <li>
            <Link to="/favorites" data-testid="link-to-favorites"> Favoritas </Link>
          </li>
        </ul>
        {
          (carregando) ? <Loading /> : (
            <p data-testid="header-user-name">
              {nomeUsuario}
            </p>
          )
        }
      </section>
    );
  }
}
