import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotFound extends Component {
  render() {
    const { estadoNome } = this.props;
    return (
      <section>
        <section data-testid="page-not-found">
          Output NotFound
          {' '}
          {estadoNome}
        </section>
      </section>
    );
  }
}

NotFound.propTypes = { estadoNome: PropTypes.string }.isRequired;
