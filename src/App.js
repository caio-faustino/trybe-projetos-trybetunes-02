import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './Album';
import Favorites from './Favorites';
import NotFound from './NotFound';
import ProfileEdit from './ProfileEdit';
import Login from './Login';
import Search from './Search';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <section
        className="App"
      >
        <Switch>
          <Route path="/" component={ Login } exact />
          <Route path="/search" component={ Search } exact />
          <Route path="/album/:id" component={ Album } exact />
          <Route path="/favorites" component={ Favorites } exact />
          <Route path="/profile" component={ Profile } exact />
          <Route path="/profile/edit" component={ ProfileEdit } exact />
          <Route path="*" component={ NotFound } exact />
        </Switch>
      </section>
    );
  }
}

export default App;
