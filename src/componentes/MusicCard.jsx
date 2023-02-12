import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Carregando';

export default class MusicCard extends Component {
  state = {
    carregando: false,
    favoritoChecado: false,
  };

  componentDidMount() {
    const { favoriteSongs, infoApiMusic } = this.props;
    const result = (favoriteSongs.includes(infoApiMusic));
    this.setState({ favoritoChecado: result });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const result = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: result,
    }, this.checkado);
  };

  checkado = async () => {
    const { favorite } = this.props;
    this.setState({ carregando: true });
    await favorite();
    this.setState({ carregando: false });
  };

  render() {
    const { infoApiPreview, infoApiMusic, testAudioData,
      trackId } = this.props;
    const { favoritoChecado, carregando } = this.state;
    return (
      <div>
        <h2>
          {infoApiMusic}
        </h2>
        <audio data-testid={ testAudioData } src={ infoApiPreview } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <label htmlFor="checkado">
          {' '}
          Favorita
          <input
            checked={ favoritoChecado }
            onChange={ this.handleChange }
            type="checkbox"
            id="checkado"
            data-testid={ `checkbox-music-${trackId}` }
            name="favoritoChecado"
          />
          {(carregando) && <Loading />}
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  infoApiPreview: PropTypes.string,
  infoApiMusic: PropTypes.string,
  testAudioData: PropTypes.string,
  dataTestMusic: PropTypes.string,
}.isRequired;
