import React, { Component } from 'react';
import Header from './Header';

class Album extends Component {
  render() {
    return (
      <section data-testid="page-album">
        {console.log('Album')}
        <Header/>
      </section>
    );
  }
}

export default Album;
