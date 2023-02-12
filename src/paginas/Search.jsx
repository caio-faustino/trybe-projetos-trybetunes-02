import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumAPI from '../services/searchAlbumsAPI';
import Header from '../componentes/Header';
import Loading from '../componentes/Carregando';
import Form from '../componentes/Formulario';

export default class Search extends Component {
  state = {
    procurarNome: '',
    albunsLista: [],
    valorImputado: '',
    carregando: false,
    btnDisabled: true,
  };

  componentDidUpdate() {
    const { variavelUpdate } = this.state;
    if (variavelUpdate) {
      this.setState(
        { variavelUpdate: false },
        this.func,
      );
    }
  }

  saidaBuscaAlbumAPI = async () => {
    const { valorImputado } = this.state;
    const procuraNome = valorImputado;
    this.setState({ valorImputado: '',
      carregando: true,
    });
    const albunsLista = await searchAlbumAPI(valorImputado);
    this.setState({ carregando: false,
      procurarNome: procuraNome,
      albunsLista,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const output = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: output }, this.handleError);
  };

  handleError = () => {
    const { valorImputado } = this.state;
    const lengthMin = 2;
    const casosErro = [valorImputado.length < lengthMin];
    const desabilitado = casosErro.every((error) => error !== true);
    this.setState({ btnDisabled: !desabilitado });
  };

  render() {
    const { valorImputado, btnDisabled,
      carregando, procurarNome,
      albunsLista,
    } = this.state;
    return (
      <section data-testid="page-search">
        <Header />
        { (carregando) ? <Loading /> : (
          <Form
            htmlFor="formSearch"
            onChange={ this.handleChange }
            btnDisabled={ btnDisabled }
            value={ valorImputado }
            onClick={ this.saidaBuscaAlbumAPI }
            btnDataTest="search-artist-button"
            inputTestData="search-artist-input"
            textBtn="Pesquisar"
            estadoNome="valorImputado"
          />)}
        {(procurarNome) && (
          <p>
            Resultado de álbuns de:
            {' '}
            {procurarNome}
          </p>)}
        {(albunsLista.length > 0 && procurarNome) ? (
          <ul>
            {albunsLista.map((album, index) => (
              <li key={ `${album.artistId}${album.artistName}${index}` }>
                {album.collectionName}
                <Link
                  data-testid={ `link-to-album-${album.collectionId}` }
                  to={ { pathname: `/album/${album.collectionId}`,
                    state: { fromDashboard: true } } }
                >
                  Conheça
                </Link>
              </li>))}
          </ul>
        ) : (
          <p>
            Nenhum álbum foi encontrado
          </p>
        )}
      </section>
    );
  }
}
