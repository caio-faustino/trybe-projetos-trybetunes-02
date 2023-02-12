import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotFound extends Component {
  //  state= {
  //    boolDidUpdate: false,
  //  }

  //  componentDidMount() {
  //
  //  }

  //  shouldComponentUpdate(nextProps, nextState) {
  //
  //    return true;
  //  }

  //  componentDidUpdate() {
  //    const { boolDidUpdate } = this.state;
  //    if (boolDidUpdate) {
  //      this.setState({boolDidUpdate: false,}, this.func)
  //    }
  //  }

  //  componentDidMount() {
  //
  //  }

  render() {
    const { estadoNome } = this.props;
    return (
      <div data-testid="page-not-found">
        NotFound renderizado com o
        {' '}
        {estadoNome}
      </div>
    );
  }
}

NotFound.propTypes = {
  estadoNome: PropTypes.string,
}.isRequired;
