import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favorites from '../paginas/Favorites';
import Album from '../paginas/Album';
import NotFound from '../paginas/NotFound';
import ProfileEdit from '../paginas/ProfileEdit';
import Profile from '../paginas/Profile';
import Search from '../paginas/Search';
import Login from '../paginas/Login';

export default class Routes extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/" component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </section>
    );
  }
}

Routes.propTypes = { estadoNome: PropTypes.string,
}.isRequired;
