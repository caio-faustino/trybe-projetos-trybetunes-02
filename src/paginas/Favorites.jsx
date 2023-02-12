import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';

export default class Favorites extends Component {
  render() {
    const { estadoNome } = this.props;
    return (
      <section data-testid="page-favorites">
        <section>
          <Header />
          Output Favoritos
          {' '}
          {estadoNome}
        </section>
      </section>
    );
  }
}

Favorites.propTypes = { estadoNome: PropTypes.string }.isRequired;
