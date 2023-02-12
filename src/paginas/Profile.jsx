import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';

export default class Profile extends Component {
  render() {
    const { estadoNome } = this.props;
    return (
      <section data-testid="page-profile">
        <section>
          <Header />
          Output Profile
          {' '}
          {estadoNome}
        </section>
      </section>
    );
  }
}

Profile.propTypes = { estadoNome: PropTypes.string }.isRequired;
