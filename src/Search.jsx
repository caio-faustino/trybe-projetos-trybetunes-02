import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  render() {
    return (
      <section data-testid="page-search">
        {console.log('Search')}
        <Header/>
      </section>
    );
  }
}

export default Search;
