import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Header from '../componentes/Header';
import Loading from '../componentes/Carregando';
import MusicCard from '../componentes/MusicCard';

export default class Album extends Component {
  state = {
    favoriteSongs: [],
    pegarMusica: [],
    carregando: true,
  };

  componentDidMount() {
    this.pegarMusica();
    this.carregarMusicasFavoritas();
  }

  favoriteMusic = async (indexSong) => {
    const { pegarMusica, favoriteSongs } = this.state;
    const variavel = favoriteSongs.includes(
      pegarMusica[indexSong].trackName,
    );
    if (variavel) {
      await removeSong(pegarMusica[indexSong]);
    } else {
      await addSong(pegarMusica[indexSong]);
    }
  };

  carregarMusicasFavoritas = async () => {
    const favoriteMusics = await getFavoriteSongs();
    const musicaFavoritaNome = favoriteMusics.map(
      (music) => music.trackName,
    );
    this.setState(
      { carregando: false,
        favoriteSongs: musicaFavoritaNome,
      },
    );
  };

  pegarMusica = async () => {
    const { match: { params: { id } } } = this.props;
    const teste = await getMusics(id);
    this.setState({
      pegarMusica: teste,
    });
  };

  render() {
    const { pegarMusica, carregando, favoriteSongs } = this.state;
    return (
      <section>
        <section data-testid="page-album">
          <Header />
          {(carregando) ? <Loading /> : (
            (pegarMusica) && (
              <section>
                <p data-testid="album-name">
                  {pegarMusica.map((album, index) => (
                    (index === 0) && album.collectionName))}
                </p>
                <p data-testid="artist-name">
                  {pegarMusica.map((artist, index) => (
                    (index === 0) && artist.artistName))}
                </p>
                {pegarMusica.map((music, index) => (
                  (index > 0) && <MusicCard
                    favoriteSongs={ favoriteSongs }
                    trackId={ music.trackId }
                    testAudioData="audio-component"
                    key={ music.trackId }
                    infoApiMusic={ music.trackName }
                    favorite={ () => this.favoriteMusic(index) }
                    infoApiPreview={ music.previewUrl }
                  />))}
              </section>
            ))}
        </section>
      </section>
    );
  }
}

Album.propTypes = { estadoNome: PropTypes.string }.isRequired;
