import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Album from './Album';
import Login from './Login';
import Search from './Search';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class Rotas extends Component {
  render() {
    return (
      <section>
        <Route exact path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route component={ NotFound } />
      </section>
    );
  }
}

export default Rotas;
