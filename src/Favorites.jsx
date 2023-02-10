import React, { Component } from 'react';
import Header from './Header';

class Favorites extends Component {
  render() {
    return (
      <section data-testid="page-favorites">
        {console.log('Favorites')}
        <Header />
      </section>
    );
  }
}

export default Favorites;
