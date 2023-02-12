import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';

export default class ProfileEdit extends Component {
  render() {
    const { estadoNome } = this.props;
    return (
      <section data-testid="page-profile-edit">
        <section>
          <Header />
          Output Profile Edit
          {' '}
          {estadoNome}
        </section>
      </section>
    );
  }
}

ProfileEdit.propTypes = { estadoNome: PropTypes.string }.isRequired;
