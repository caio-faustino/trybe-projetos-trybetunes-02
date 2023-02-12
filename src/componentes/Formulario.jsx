import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { infoBtn, onClick, inputTestData,
      onChange, btnDataTest, htmlFor,
      btnDisabled, estadoNome, value,
    } = this.props;
    return (
      <form>
        <label htmlFor={ htmlFor }>
          <input
            name={ estadoNome }
            onChange={ onChange }
            data-testid={ inputTestData }
            value={ value }
            id={ htmlFor }
          />
        </label>
        <button
          disabled={ btnDisabled }
          data-testid={ btnDataTest }
          type="button"
          onClick={ onClick }
        >
          {infoBtn}
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onClick: PropTypes.func,
  inputTestData: PropTypes.string,
  btnDataTest: PropTypes.string,
  htmlFor: PropTypes.string,
}.isRequired;
